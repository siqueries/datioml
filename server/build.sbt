import com.typesafe.sbt.SbtScalariform._
import com.typesafe.sbt.packager.archetypes.JavaServerAppPackaging

name := "server"

version := "1.0"

scalaVersion := "2.11.7"

enablePlugins(JavaServerAppPackaging)

scalariformSettings

resolvers ++= Seq(
  "twttr" at "http://maven.twttr.com/"
)

val finagleVersion = "6.27.0"

libraryDependencies ++= Seq(
  "com.twitter" %% "finagle-core" % finagleVersion,
  "com.twitter" % "finagle-serversets_2.11" % "6.27.0",
  //"com.twitter" %% "finagle-http" % finagleVersion,
  "com.twitter" % "finagle-http_2.11" % "6.27.0",
  "com.twitter" % "twitter-server_2.11" % "1.12.0",
  "org.scalatest" %% "scalatest" % "2.2.1" % "test",
  "postgresql" % "postgresql" % "9.1-901-1.jdbc4",
  "mysql" % "mysql-connector-java" % "5.1.6",
  "com.googlecode.json-simple" % "json-simple" % "1.1.1",
  "org.mongodb" % "mongo-java-driver" % "3.2.2",
  "com.typesafe.play" % "play-json_2.11" % "2.3.9",
  "org.slf4j" % "slf4j-log4j12" % "1.7.16",
  "commons-dbcp" % "commons-dbcp" % "1.4",
  "com.zaxxer" % "HikariCP" % "2.4.3",
  "org.slf4j" % "slf4j-api" % "1.7.12",
  "commons-io" % "commons-io" % "2.4",
  "com.fasterxml.jackson.core" % "jackson-annotations" % "2.7.1",
  "net.sf.opencsv" % "opencsv" % "2.3",
  "commons-codec" % "commons-codec" % "1.10",
  "com.google.code.simple-spring-memcached" % "spymemcached" % "2.8.4",
  "com.typesafe.akka" % "akka-actor_2.10" % "2.3.14",
  "com.typesafe.akka" % "akka-remote_2.10" % "2.3.14",
  "com.typesafe.akka" % "akka-testkit_2.10" % "2.3.14",
  "com.thenewmotion.akka" % "akka-rabbitmq_2.10" % "2.2",
  "com.google.code.gson" % "gson" % "2.6.1",
  "com.twitter" % "finagle-ostrich4_2.11" % "6.27.0",
  "com.h2database" % "h2" % "1.4.191",
  "org.apache.commons" % "commons-lang3" % "3.4"
)

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
  case "com/twitter/common/args/apt/cmdline.arg.info.txt.1"               => MergeStrategy.first
  case x =>
    val oldStrategy = (assemblyMergeStrategy in assembly).value
    oldStrategy(x)
}
