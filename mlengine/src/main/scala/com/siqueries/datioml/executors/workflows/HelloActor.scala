package com.siqueries.datioml.executors.workflows

import akka.actor.Actor
import org.apache.spark.SparkContext
import org.apache.spark.sql.SQLContext

class HelloActor(sparkContext: SparkContext,
                 sqlContext: SQLContext
                  ) extends Actor {
  def receive = {
    case "hello" =>
      val df = sqlContext.read
          .format("com.databricks.spark.csv")
          .option("header", "true") // Use first line of all files as header
          .option("inferSchema", "true") // Automatically infer data types
          .load("/srv/dev/ds/ml-workflow/cars.csv")
      df.registerTempTable("cars_table")
      val result = sqlContext.sql("select * from cars_table")
      result.show()
      val rdd = result.rdd.cache()

      val dataset = rdd.map{ line =>
        line(0)
      }
      println(dataset)

    case _ => println("huh?")
  }
}