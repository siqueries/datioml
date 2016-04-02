package com.siqueries.datioml.executors.workflows

import java.util
import java.io.{ File, FileReader }
import akka.actor.Actor
import au.com.bytecode.opencsv.CSVReader
import com.siqueries.datioml.executors.javas.utils.MLConstants
import org.apache.spark.mllib.feature.StandardScaler
import org.apache.spark.mllib.feature.StandardScalerModel
import org.apache.spark.mllib.tree.RandomForest
import org.apache.spark.mllib.tree.model.RandomForestModel
import org.apache.spark.SparkContext
import org.apache.spark.mllib.linalg.Vectors
import org.apache.spark.mllib.regression.LabeledPoint
import org.apache.spark.mllib.tree._
import org.apache.spark.sql.SQLContext
import org.json.simple.JSONValue
import play.api.libs.json.{ Json, JsValue }
import scala.collection.JavaConversions._
import scala.util.control.Breaks._


class WorkflowReceiverActor
(sparkContext: SparkContext,
 sqlContext: SQLContext
  ) extends Actor  {

  def receive = {
    case workflowContent: String =>

      val json: JsValue = Json.parse(workflowContent)
      val filePath = (json \ "filePath").as[String]
      val tableName = (json \ "tableName").as[String]

      val algorithmContentString = (json \ "algorithmContent").as[String]
      val algorithmContentStringParsed = Json.parse(algorithmContentString)
      val algorithm = (algorithmContentStringParsed \ "algorithm").as[Map[String, String]]
      val preprocess = (algorithmContentStringParsed \ "preprocess").as[List[Map[String, String]]]
      val responseIndex = (algorithmContentStringParsed \ "target-variable-index").as[Int]
      val newToOldIndicesList = (algorithmContentStringParsed \ "newToOldIndicesList").as[List[Int]]


      val algorithmName = algorithm.getOrElse("algorithm_name", "")
      val targetVariable = algorithm.getOrElse("target_variable", "")
      val trainingFraction = algorithm.getOrElse("training_fraction", "").toDouble


      val df = sqlContext.read
        .format("com.databricks.spark.csv")
        .option("header", "true")
        .option("inferSchema", "true")
        .load(filePath)
      df.registerTempTable(tableName)

      val classResults = sqlContext.sql(s"SELECT DISTINCT ${targetVariable}  FROM ${tableName}")

      val classRDD = classResults.rdd.cache()
      val uniqueClasses = classRDD.zipWithIndex().collect().toList

      val holder = new java.util.HashMap[String, Long]()
      val predictionHolder = new java.util.HashMap[Double, String]()
      for(u <- uniqueClasses){
        holder.put(u._1.getAs(0).toString, u._2)
        predictionHolder.put(java.lang.Double.parseDouble(String.valueOf(u._2)), u._1.getAs(0))
      }



      val lines = sparkContext.textFile(filePath).cache()
      val headers = lines.first()
      val data = lines.filter{
        line =>
          var isRow = true
          if(line.equalsIgnoreCase(headers)){
            isRow = false
          }
          isRow
      }.map{
        filterRows =>
          filterRows.split(",")
      }.filter{
          tokens =>
            var keep = true
            breakable {
              for((token, i) <- tokens.zipWithIndex){
                if(MLConstants.MISSING_VALUES.contains(token)){
                  keep = false
                  break
                }
              }
            }
            keep
        }.map{
        tokens =>
          var size = newToOldIndicesList.size + 1
          if (responseIndex == -1) {
            size = newToOldIndicesList.size
          }
          val features = new Array[String](size)
          breakable {
            for(i <- 0 to (tokens.length - 1)){
              val newIndex = newToOldIndicesList.indexOf(i)
              if(newIndex != -1){
                features(newIndex) = tokens(i)
              }else if(i == responseIndex){
                features(features.length - 1) = tokens(i)
              }else {

              }
            }
          }
          features
      }.map{
        tokens =>
          val features = new Array[String](tokens.length)
          for(i <- 0 to (tokens.length -1)) {
            if(i == responseIndex){
              features(i) = String.valueOf(holder.get(tokens(i)))
            }else{
              features(i) = tokens(i)
            }

          }
          features
      }.map{
          tokens =>
            val features = new Array[Double](tokens.length)
            for(i <- 0 to (tokens.length - 1)){
              features(i) = java.lang.Double.parseDouble(tokens(i))
            }
            features
        }.map{
        tokens =>
          val response: Double = tokens(tokens.length - 1)
          val features = new Array[Double](tokens.length - 1)
          for(i <- 0 to (tokens.length - 2)){
            features(i) = tokens(i)
          }
          new LabeledPoint(response, Vectors.dense(features))
      }

      val splits = data.randomSplit(Array(0.7, 0.3))
      val (trainingData, testData) = (splits(0), splits(1))

      val numClasses = 5
      val categoricalFeaturesInfo = Map[Int, Int]()
      val numTrees = 5 // Use more in practice.
      val featureSubsetStrategy = "auto" // Let the algorithm choose.
      val impurity = "gini"
      val maxDepth = 5
      val maxBins = 100

      val model = RandomForest.trainClassifier(trainingData, numClasses, categoricalFeaturesInfo,
        numTrees, featureSubsetStrategy, impurity, maxDepth, maxBins)

//      breakable {
//        var counter = 0
//        for(m <- testData){
//          println(s"lable: ${m.label} features: ${m.features}")
//          val prediction = model.predict(m.features)
//          println(s"lable: ${data._1} & prediction: ${predictionHolder.getOrElse(data._2, "")}")
//          if(counter > 1){
//            break
//          }
//          counter +=1
//        }
//      }
      // Evaluate model on test instances and compute test error
      val labelAndPreds = testData.map { point =>
        println(s"features; ${point.features}")
        val prediction = model.predict(point.features)
        (point.label, prediction)
      }
      println(s"holder: ${holder}")
      labelAndPreds.foreach {
        data =>
          println(s"lable: ${data._1} & prediction: ${predictionHolder.getOrElse(data._2, "")}")
      }
//      val testErr = labelAndPreds.filter(r => r._1 != r._2).count.toDouble / testData.count()
//      println("Test Error = " + testErr)
//      println("Learned classification forest model:\n" + model.toDebugString)





//      println(headers)
//      println(lines.take(1)(0))

//      val df = sqlContext.read
//        .format("com.databricks.spark.csv")
//        .option("header", "true")
//        .option("inferSchema", "true")
//        .load(filePath)
//      df.registerTempTable(tableName)
//
//      val classResults = sqlContext.sql(s"SELECT DISTINCT ${targetVariable}  FROM ${tableName}")
//
//      val classRDD = classResults.rdd.cache()
//      val uniqueClasses = classRDD.zipWithIndex().collect().toList
//
//      val holder = new java.util.HashMap[String, Long]()
//      for(u <- uniqueClasses){
//        holder.put(u._1.getAs(0), u._2)
//      }
//
//      val csv = new CSVReader(new FileReader(filePath), ",".charAt(0))
//      val headers = csv.readNext()
//      val rows = csv.readAll()
//
//      for(row <- rows){
//        if(row.equals(headers)){
//          println("we are on header")
//        }
//        val training_row = new java.util.ArrayList[String]()
//        var indicator = 0L;
//        for((header, i) <- headers.view.zipWithIndex){
//          if(header == targetVariable){
//            indicator = holder.get(row(i))
//          }else{
//            training_row.add(row(i))
//          }
//        }
//
//      }








//
//      algorithmName match {
//        case "RANDOM_FOREST_CLASSIFICATION" =>
//          println("we are here")
//      }
//

//
//      val result = sqlContext.sql(
//        s"SELECT sepal_length_cm, sepal_width_cm," +
//          s" petal_length_cm, petal_width_cm, class " +
//          s" FROM ${tableName}")
//
//      println(holder)
//
//      result.show()
//      val rdd = result.rdd.cache()
//      val dataset = rdd.map {
//        line =>
//          val sepal_length_cm = line.getString(0).toDouble
//          val sepal_width_cm = line.getString(1).toDouble
//          val petal_length_cm = line.getString(2).toDouble
//          val petal_width_cm = line.getString(3).toDouble
//          val cl = holder.get(line.getString(4)).toDouble
//          LabeledPoint(cl, Vectors.dense(sepal_length_cm, sepal_width_cm, petal_length_cm, petal_width_cm))
//      }


//      val rep = new util.HashMap[String, Double]()
//      rep.put("num", dataset.count())
//      println(rep)

//      val scaler = new StandardScaler(withMean = true, withStd = true)
//        .fit(dataset.map(x => x.features))
//
//      val scaledData = dataset
//        .map(x =>
//          LabeledPoint(x.label,
//            scaler.transform(Vectors.dense(x.features.toArray)))).cache()
//
//      val splits = dataset.randomSplit(Array(0.8, 0.2), seed = 11L)
//      val trainingData = splits(0).cache()
//      val testingData = splits(1).cache()
     // val datasetCount = String.valueOf(dataset.count()) //dataset.count()


      //println(s"nGot datasets: ${datasetCount} values from csv")

      //println("\nGot " + dataset.count().toString + " values from Gem. Using " + trainingData.count().toString + " for training and "+ testingData.count().toString + " for testing\n")


    case _ => println("huh?")
  }

}
