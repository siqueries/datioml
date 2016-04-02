package com.siqueries.datio.server.utils

object SQLQueries {

  final val CREATE_PROJECT_SQL = "INSERT INTO Projects(name, description, user_id) VALUES ('%s', '%s', '%s');"
  final val GET_PROJECTS_SQL = "SELECT name, description, user_id, id, created_at from Projects WHERE user_id='%s' ORDER BY id DESC;"
  final val GET_PROJECT_SQL = "SELECT name, description, user_id, id, created_at from Projects WHERE user_id='%s' AND id=%s LIMIT 1;"

  final val CREATE_DATA_SETS_SQL = "INSERT INTO Datasets(name, project_id, data_type, description, user_id) VALUES ('%s', '%s', '%s', '%s', '%s');"
  final val GET_DATA_SETS_SQL = "SELECT name, project_id, data_type, description, user_id, id, created_at from Datasets WHERE project_id='%s' AND user_id='%s' ORDER BY id DESC;"
  final val GET_DATA_SET_SQL = "SELECT name, project_id, data_type, description, user_id, id, created_at from Datasets WHERE id=%s AND project_id='%s' AND user_id='%s' LIMIT 1;"

  final val CREATE_FILE_SQL = "INSERT INTO Filetypes(file_name, project_id, dataset_id, file_type, column_headers, user_id) VALUES ('%s', '%s', '%s', '%s', '%s', '%s');"

  final val CREATE_ANALYSIS_SQL = "INSERT INTO Analysis(name, dataset_id, project_id, user_id) VALUES ('%s', '%s', '%s', '%s');"
  final val GET_ANALYSIS_SQL = "SELECT name, dataset_id, project_id, user_id, id, created_at FROM Analysis WHERE project_id='%s' AND user_id='%s' ORDER BY id DESC;"
  final val GET_SINGLE_ANALYSIS_SQL = "SELECT name, dataset_id, project_id, user_id, id, created_at from Analysis WHERE user_id='%s' AND id=%s LIMIT 1;"

  final val CREATE_MODEL_SQL = "INSERT INTO Models(name, project_id, analysis_id, user_id) VALUES ('%s', '%s', '%s', '%s');"

  final val GET_META_DATA_SQL =
    s"""
       |SELECT Filetypes.`file_name`, Filetypes.`dataset_id`, Filetypes.`user_id`
       |FROM Filetypes
       |WHERE Filetypes.`user_id`='%s'
       |	AND Filetypes.`dataset_id`=%s LIMIT 1;
     """.stripMargin

  val H2_DATASET =
    """
      |CREATE TABLE IF NOT EXISTS ML_DATASET_SCHEMA(
      |DATASET_SCHEMA_ID BIGINT AUTO_INCREMENT,
      |NAME VARCHAR(100),
      |TENANT_ID INT,
      |USERNAME VARCHAR(50),
      |COMMENTS CLOB,
      |SOURCE_TYPE VARCHAR(50),
      |TARGET_TYPE VARCHAR(50),
      |DATA_TYPE VARCHAR(50),
      |CONSTRAINT PK_DATASET_SCHEMA PRIMARY KEY(DATASET_SCHEMA_ID),
      |);
    """.stripMargin

  def createProjectSql(tableName: String): String = {
    val sql = s"CREATE TABLE IF NOT EXISTS ${tableName}" +
      " (id int NOT NULL AUTO_INCREMENT, " +
      "name varchar(255) NOT NULL, " +
      "description varchar(255) NOT NULL," +
      "user_id varchar(255) NOT NULL, " +
      "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, " +
      "PRIMARY KEY (id)" +
      ");"
    sql.trim
  }

  def createDataSetSql(tableName: String): String = {
    val sql = s"CREATE TABLE IF NOT EXISTS ${tableName}" +
      " (" +
      "id int NOT NULL AUTO_INCREMENT, " +
      "project_id int, " +
      "data_type varchar(255) NOT NULL, " +
      "name varchar(255) NOT NULL," +
      "description varchar(255) NOT NULL," +
      "user_id varchar(255) NOT NULL, " +
      "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, " +
      "PRIMARY KEY (id)" +
      ");"
    sql.trim
  }

  def createFileTypeSql(tableName: String): String = {
    val sql = s"CREATE TABLE IF NOT EXISTS ${tableName}" +
      " (" +
      "id int NOT NULL AUTO_INCREMENT, " +
      "project_id int, " +
      "dataset_id int, " +
      "file_type varchar(255) NOT NULL, " +
      "file_name varchar(255) NOT NULL," +
      "column_headers TINYINT(1) NOT NULL," +
      "user_id varchar(255) NOT NULL, " +
      "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, " +
      "PRIMARY KEY (id)" +
      ");"
    sql.trim
  }

  def createAnalysisSql(tableName: String): String = {
    val sql = s"CREATE TABLE IF NOT EXISTS ${tableName}" +
      " (" +
      "id int NOT NULL AUTO_INCREMENT, " +
      "project_id int, " +
      "dataset_id int, " +
      "name varchar(255) NOT NULL, " +
      "user_id varchar(255) NOT NULL, " +
      "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, " +
      "PRIMARY KEY (id)" +
      ");"
    sql.trim
  }

  def createModelSql(tableName: String): String = {
    val sql = s"CREATE TABLE IF NOT EXISTS ${tableName}" +
      " (" +
      "id int NOT NULL AUTO_INCREMENT, " +
      "project_id int, " +
      "analysis_id int, " +
      "name varchar(255) NOT NULL, " +
      "user_id varchar(255) NOT NULL, " +
      "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, " +
      "PRIMARY KEY (id)" +
      ");"
    sql.trim
  }

}
