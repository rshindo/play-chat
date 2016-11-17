name := """play-chat-server"""

version := "1.0-SNAPSHOT"

lazy val root = (project in file(".")).enablePlugins(PlayScala).enablePlugins(SbtWeb)

scalaVersion := "2.11.7"

libraryDependencies ++= Seq(
  jdbc,
  cache,
  ws,
  evolutions,
  "org.scalatestplus.play" %% "scalatestplus-play" % "1.5.1" % Test,
  "mysql" % "mysql-connector-java" % "5.1.38",
  "org.scalikejdbc" %% "scalikejdbc"                    % "2.4.2",
  "org.scalikejdbc" %% "scalikejdbc-config"             % "2.4.2",
  "org.scalikejdbc" %% "scalikejdbc-play-dbapi-adapter" % "2.5.1"
)

