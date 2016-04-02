import AssemblyKeys._  // put this at the top of the file

assemblySettings

packSettings

// [Optional: Mappings from a program name to the corresponding Main class ]
//packMain := Map("hello" -> "myprog.Hello")

name := "rest"

version := "1.0"

// Enables publishing to maven repo
publishMavenStyle := true

// Do not append Scala versions to the generated artifacts
crossPaths := false

// This forbids including Scala related libraries into the dependency
autoScalaLibrary := false

// library dependencies. (orginization name) % (project name) % (version)
libraryDependencies ++= Seq(
  "org.apache.commons" % "commons-math3" % "3.1.1",
  "org.fluentd" % "fluent-logger" % "0.2.10",
  "org.apache.commons" % "commons-lang3" % "3.0",
  "com.fasterxml.jackson.core" % "jackson-annotations" % "2.7.3",
  "javax.servlet" % "javax.servlet-api" % "3.1.0",
  "io.dropwizard" % "dropwizard-core" % "0.9.2",
  "com.googlecode.json-simple" % "json-simple" % "1.1.1",
  "org.mockito" % "mockito-core" % "1.9.5" % "test"  // Test-only dependency
)