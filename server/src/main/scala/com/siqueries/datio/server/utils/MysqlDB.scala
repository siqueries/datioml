package com.siqueries.datio.server.utils

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;
import java.sql.Statement;

import com.twitter.logging._

object MysqlDB extends {

  val log = Logger.get(MysqlDB.getClass)

  def getConnection(): Connection = {
    Class.forName("com.mysql.jdbc.Driver")
    DriverManager.getConnection(String.format("jdbc:mysql://%s:%s/%s", "127.0.0.1", "3306", "datioml"), "root", "")
  }

  def createTables(conn: Connection) = {
    log.info("Checking if we need to generate the required tables for DatioML \uD83D\uDE0E")
    val stmt = conn.createStatement()
    stmt.execute(SQLQueries.createProjectSql("Projects"))
    stmt.execute(SQLQueries.createFileTypeSql("Filetypes"))
    stmt.execute(SQLQueries.createDataSetSql("Datasets"))
    stmt.execute(SQLQueries.createAnalysisSql("Analysis"))
    stmt.execute(SQLQueries.createModelSql("Models"))
    stmt.close()
    conn.close()
    log.info("Done checks on tables. \uD83D\uDC4F\uD83C\uDFFF")
    log.info("All good here \uD83C\uDF05")
  }

}
