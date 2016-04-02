name := "datioml-executors"

version := "1.0"

scalaVersion := "2.10.5"

libraryDependencies ++= Seq(
  "org.apache.spark" % "spark-core_2.10" % "1.6.0" % "provided",
  "org.apache.spark" % "spark-sql_2.10" % "1.6.0" % "provided",
  "org.apache.spark" % "spark-mllib_2.10" % "1.6.0" % "provided",
  "com.typesafe.akka" % "akka-actor_2.10" % "2.3.14",
  "com.typesafe.akka" % "akka-testkit_2.10" % "2.3.14",
  "com.thenewmotion.akka" % "akka-rabbitmq_2.10" % "2.2",
  "com.databricks" % "spark-csv_2.10" % "1.3.0"
)
    