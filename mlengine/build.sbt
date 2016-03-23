import _root_.sbtassembly.AssemblyPlugin.autoImport._
import com.typesafe.sbt.packager.archetypes.JavaServerAppPackaging

name := "mlengine"

version := "1.0"

scalaVersion := "2.10.5"

enablePlugins(JavaServerAppPackaging)

libraryDependencies ++= Seq(
  "org.apache.spark" % "spark-core_2.10" % "1.6.0"
    exclude("stax", "stax-api")
    exclude("commons-beanutils", "commons-beanutils-core")
    exclude("commons-beanutils", "commons-beanutils")
    exclude("org.apache.hadoop","hadoop-yarn-common")
    exclude("org.apache.hadoop","hadoop-yarn-api")
  ,
  "org.apache.spark" % "spark-sql_2.10" % "1.6.0" ,// % "compiled",
  "org.apache.spark" % "spark-mllib_2.10" % "1.6.0" ,// % "compiled",
  "com.typesafe.akka" % "akka-actor_2.10" % "2.3.14",
  "com.typesafe.akka" % "akka-testkit_2.10" % "2.3.14",
  "com.thenewmotion.akka" % "akka-rabbitmq_2.10" % "2.2",
  "com.databricks" % "spark-csv_2.10" % "1.3.0",
  "hsqldb" % "hsqldb" % "1.8.0.10",
  "org.slf4j" % "slf4j-log4j12" % "1.7.16",
  "com.googlecode.json-simple" % "json-simple" % "1.1.1",
  "net.sf.opencsv" % "opencsv" % "2.3",
  "com.typesafe.play" % "play-json_2.10" % "2.3.9"
)


//libraryDependencies ++= Seq(
//  "org.apache.spark" % "spark-core_2.10" % "1.6.0" % "provided",
//  "org.apache.spark" % "spark-sql_2.10" % "1.6.0" % "provided",// % "compiled",
//  "org.apache.spark" % "spark-mllib_2.10" % "1.6.0" % "provided",// % "compiled",
//  "com.typesafe.akka" % "akka-actor_2.10" % "2.3.14",
//  "com.typesafe.akka" % "akka-testkit_2.10" % "2.3.14",
//  "com.thenewmotion.akka" % "akka-rabbitmq_2.10" % "2.2",
//  "com.databricks" % "spark-csv_2.10" % "1.3.0",
//  "hsqldb" % "hsqldb" % "1.8.0.10",
//  "org.slf4j" % "slf4j-log4j12" % "1.7.16"
//)




assemblyMergeStrategy in assembly := {

  case "META-INF/maven/org.apache.avro/avro-ipc/pom.properties" => MergeStrategy.first
  case "META-INF/maven/org.slf4j/slf4j-api/pom.properties" => MergeStrategy.first
  case "META-INF/maven/org.slf4j/slf4j-api/pom.xml" => MergeStrategy.first
  case "com/esotericsoftware/minlog/Log$Logger.class" => MergeStrategy.first
  case "com/esotericsoftware/minlog/Log.class" => MergeStrategy.first
  case "com/google/common/base/Absent.class" => MergeStrategy.first
  case "com/google/common/base/Function.class" => MergeStrategy.first
  case "com/google/common/base/Optional$1$1.class" => MergeStrategy.first
  case "com/google/common/base/Optional$1.class" => MergeStrategy.first
  case "com/google/common/base/Optional.class" => MergeStrategy.first
  case "com/google/common/base/Supplier.class" => MergeStrategy.first
  case "com/google/common/base/Present.class" => MergeStrategy.first
  case "org/apache/spark/unused/UnusedStubClass.class" => MergeStrategy.first
  case "org/apache/hadoop/yarn/factories/package-info.class" => MergeStrategy.first
  case "javax/xml/stream/FactoryConfigurationError.class" => MergeStrategy.first
  case "org/slf4j/impl/StaticLoggerBinder.class"            => MergeStrategy.first
  case "org/slf4j/impl/StaticMDCBinder.class"               => MergeStrategy.first
  case "org/slf4j/impl/StaticMarkerBinder.class"               => MergeStrategy.first
  case x =>
    val oldStrategy = (assemblyMergeStrategy in assembly).value
    oldStrategy(x)
}