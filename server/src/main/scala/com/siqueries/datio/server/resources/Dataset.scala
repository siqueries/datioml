package com.siqueries.datio.server.resources

import java.sql.{ ResultSetMetaData, ResultSet, Statement }
import java.util

import com.siqueries.datio.server.javautils.CsvUtil
import com.siqueries.datio.server.utils.{ MysqlDB, SQLQueries }
import com.twitter.finagle.Service
import com.twitter.finagle.http.{ Status, Response, Request }
import com.twitter.util.Future
import org.json.simple.JSONValue
import play.api.libs.json.{ Json, JsValue }

object Dataset {

  class CreateDatasetImpl extends Service[Request, Response] {
    def apply(req: Request): Future[Response] = Future {
      val rep = Response(req.getProtocolVersion(), Status.Ok)
      val response = new util.HashMap[String, String]()
      val json: JsValue = Json.parse(req.getContentString())

      val userId = (json \ "userId").as[String]
      val name = (json \ "name").as[String]
      val description = (json \ "description").as[String]
      val dataFormat = (json \ "dataFormat").as[String]
      val columnHeader = (json \ "columnHeader").as[String] match {
        case "yes" => 1
        case "no" => 0
      }
      val fileName = (json \ "fileName").as[String]
      val projectId = (json \ "projectId").as[String]
      val dataType = (json \ "dataType").as[String]

      val dataSql = String.format(SQLQueries.CREATE_DATA_SETS_SQL,
        name, projectId, dataType, description, userId)
      val con = MysqlDB.getConnection()
      try {
        val statement = con.prepareStatement(dataSql, Statement.RETURN_GENERATED_KEYS)
        statement.executeUpdate()
        val rs = statement.getGeneratedKeys()
        var rowId = 0
        if (rs.next()) {
          rowId = rs.getInt(1)
        }

        val fileSql = String.format(SQLQueries.CREATE_FILE_SQL, fileName, projectId, rowId.toString, dataFormat, columnHeader.toString, userId)
        val fileStatement = con.prepareStatement(fileSql, Statement.RETURN_GENERATED_KEYS)
        fileStatement.executeUpdate()

        val csvUtil = new CsvUtil()

        val filePath = s"/opt/datioml/ui/csv_data/${fileName}"
        val tableName = s"table_${rowId}"
        csvUtil.writeToH2Database(",", filePath, tableName)
        //csvUtil.writeToDatabase(",", filePath, "datasets", tableName)

        response.put("response", "success")
        response.put("rowId", rowId.toString)
        statement.close()
        con.close()
      } catch {
        case ex: Exception => ex.printStackTrace()
      }

      rep.setContentString(JSONValue.toJSONString(response))
      rep
    }
  }

  class GetDataSetsImpl extends Service[Request, Response] {
    def apply(req: Request): Future[Response] = Future {
      val rep = Response(req.getProtocolVersion(), Status.Ok)
      val json: JsValue = Json.parse(req.getContentString())
      val userId = (json \ "userId").as[String]
      val projectId = (json \ "projectId").as[String]
      val sql = String.format(SQLQueries.GET_DATA_SETS_SQL, projectId, userId)
      val con = MysqlDB.getConnection()
      val statement = con.createStatement()
      val resultSet = statement.executeQuery(sql)
      val dataSets = new util.ArrayList[util.HashMap[String, String]]()
      while (resultSet.next) {
        val dataset = new util.HashMap[String, String]()
        dataset.put("name", resultSet.getString("name"))
        dataset.put("description", resultSet.getString("description"))
        dataset.put("data_type", resultSet.getString("data_type"))
        dataset.put("user_id", resultSet.getString("user_id"))
        dataset.put("project_id", resultSet.getString("project_id"))
        dataset.put("id", resultSet.getString("id"))
        dataset.put("created_at", resultSet.getString("created_at"))
        dataSets.add(dataset)
      }
      rep.setContentString(JSONValue.toJSONString(dataSets))
      rep
    }
  }

  class GetDataSetImpl extends Service[Request, Response] {
    def apply(req: Request): Future[Response] = Future {
      val rep = Response(req.getProtocolVersion(), Status.Ok)
      val json: JsValue = Json.parse(req.getContentString())
      val userId = (json \ "userId").as[String]
      val projectId = (json \ "projectId").as[String]
      val datasetId = (json \ "datasetId").as[String]
      val sql = String.format(SQLQueries.GET_DATA_SET_SQL, datasetId, projectId, userId)
      val con = MysqlDB.getConnection()
      val statement = con.createStatement()
      val resultSet = statement.executeQuery(sql)
      val dataset = new util.HashMap[String, Object]()
      while (resultSet.next) {
        dataset.put("name", resultSet.getString("name"))
        dataset.put("description", resultSet.getString("description"))
        dataset.put("data_type", resultSet.getString("data_type"))
        dataset.put("user_id", resultSet.getString("user_id"))
        dataset.put("project_id", resultSet.getString("project_id"))
        dataset.put("id", resultSet.getString("id"))
        dataset.put("created_at", resultSet.getString("created_at"))
      }

      val tableName = s"table_${dataset.get("id")}"
      val connection = CsvUtil.getH2Connection("datiomldb", "datiomldb")
      val stmt: Statement = connection.createStatement
      val rs: ResultSet = stmt.executeQuery(s"SELECT * FROM ${tableName} LIMIT 200;")
      val metaData: ResultSetMetaData = rs.getMetaData()

      val columnMetaData = metaData

      val counter = columnMetaData.getColumnCount
      val headersList = new util.ArrayList[util.HashMap[String, String]]()
      for (i <- 1 to counter) {
        val header: java.util.HashMap[String, String] = new java.util.HashMap[String, String]
        header.put("name", columnMetaData.getColumnName(i))
        header.put("dataType", CsvUtil.getExploreType(columnMetaData.getColumnTypeName(i)))
        header.put("index", String.valueOf(i))
        headersList.add(header)
      }

      val count = metaData.getColumnCount()
      val cl = new util.ArrayList[util.ArrayList[util.HashMap[String, String]]]()
      while (rs.next) {
        val c = new util.ArrayList[util.HashMap[String, String]]()
        for (i <- 1 to count) {
          val h = new java.util.HashMap[String, String]()
          h.put("name", metaData.getColumnName(i))
          h.put("value", rs.getString(i))
          h.put("dataType", CsvUtil.getExploreType(metaData.getColumnTypeName(i)))
          c.add(h)
          //println(s"${metaData.getColumnName(i)}: ${rs.getString(i)}")
        }
        cl.add(c)
      }
      //println(cl)

      dataset.put("header_content", cl)
      dataset.put("header_list", headersList)

      rep.setContentString(JSONValue.toJSONString(dataset))
      rep
    }
  }

  //  class GetMetaDataSetsImpl extends Service[Request, Response] {
  //    def apply(req: Request): Future[Response] = Future {
  //      val rep = Response(req.getProtocolVersion(), Status.Ok)
  //      val json: JsValue = Json.parse(req.getContentString())
  //      val userId = (json \ "userId").as[String]
  //      val analysisId = (json \ "analysisId").as[String]
  //
  //      val sql = String.format(SQLQueries.GET_SINGLE_ANALYSIS_SQL, userId, analysisId)
  //      val con = MysqlDB.getConnection()
  //      val statement = con.createStatement()
  //      val resultSet = statement.executeQuery(sql)
  //      val analysis = new util.HashMap[String, String]()
  //
  //      while (resultSet.next) {
  //        analysis.put("name", resultSet.getString("name"))
  //        analysis.put("dataset_id", resultSet.getString("dataset_id"))
  //        analysis.put("project_id", resultSet.getString("project_id"))
  //        analysis.put("user_id", resultSet.getString("user_id"))
  //        analysis.put("id", resultSet.getString("id"))
  //        analysis.put("created_at", resultSet.getString("created_at"))
  //      }
  //
  //      val tableName = s"table_${analysis.get("dataset_id")}"
  //      val connection = CsvUtil.getH2Connection("datiomldb", "datiomldb")
  //      val stmt: Statement = connection.createStatement
  //      val rs: ResultSet = stmt.executeQuery("SELECT * FROM " + tableName)
  //      val metaData: ResultSetMetaData = rs.getMetaData()
  //
  //      val columnmetaData = metaData
  //
  //      val counter = columnmetaData.getColumnCount
  //      println("we are here")
  //      val headers = new util.ArrayList[util.HashMap[String, String]]()
  //      for (i <- 1 to counter) {
  //        val head: java.util.HashMap[String, String] = new java.util.HashMap[String, String]
  //        head.put("name", columnmetaData.getColumnName(i))
  //        //head.put("dataType", getTypes(columnmetaData.getColumnTypeName(i))) //CsvUtil.getFrontendDataType(rs.getString(columnmetaData.getColumnName(i))))
  //        head.put("index", String.valueOf(i))
  //        headers.add(head)
  //      }
  //
  //      println(headers)
  //
  //      //      val headersContent = new util.ArrayList[util.HashMap[String, String]]()
  //      //      val count = metaData.getColumnCount()
  //      //      while (rs.next) {
  //      //        val header: java.util.HashMap[String, String] = new java.util.HashMap[String, String]
  //      //        for (i <- 1 to count) {
  //      //          header.put("value", rs.getString(metaData.getColumnName(i)))
  //      //          header.put("name", metaData.getColumnName(i))
  //      //          header.put("dataType", CsvUtil.getFrontendDataType(rs.getString(metaData.getColumnName(i))))
  //      //          header.put("index", String.valueOf(i))
  //      //        }
  //      //        headersContent.add(header)
  //      //      }
  //      //
  //      //      println(headersContent)
  //
  //      val metaSql = String.format(SQLQueries.GET_META_DATA_SQL, userId, analysis.get("dataset_id"))
  //      val conn = MysqlDB.getConnection()
  //      val stmts = conn.createStatement()
  //      val resultSets = stmts.executeQuery(metaSql)
  //
  //      val fileData = new util.HashMap[String, String]()
  //      while (resultSets.next) {
  //        fileData.put("fileName", resultSets.getString("file_name"))
  //      }
  //      val filePath = s"/opt/datioml/ui/csv_data/${fileData.get("fileName")}"
  //      val content = new CsvUtil().getHeadersMeta(",", filePath)
  //      rep.setContentString(content)
  //      rep
  //    }
  //  }

  def getTypes(s: String): String = {
    s match {
      case "INT" => return "Int"
      case "BOOLEAN" => return "Boolean"
      case "TINYINT" => return "Tinyint"
      case "SMALLINT" => return "Smallint"
      case "BIGINT" => return "Bigint"
      case "IDENTITY" => return ""
      case "DECIMAL" => return "Decimal"
      case "DOUBLE" => return "Double"
      case "REAL" => return "Real"
      case "TIME" => return "Time"
      case "DATE" => return "Date"
      case "TIMESTAMP" => return "Timestamp"
      case "BINARY" => return "Text"
      case "OTHER" => return "Text"
      case "VARCHAR" => return "Text"
      case "VARCHAR_IGNORECASE" => return "Text"
      case "CHAR" => return "Text"
      case "BLOB" => return "Text"
      case "CLOB" => return "Text"
      case "UUID" => return "Uuid"
      case "ARRAY" => return "Array"
      case "GEOMETRY" => return "Geometry"
    }
  }

}
