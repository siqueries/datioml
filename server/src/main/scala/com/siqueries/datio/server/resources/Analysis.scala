package com.siqueries.datio.server.resources

import java.sql.{ Statement }
import java.util

import com.siqueries.datio.server.utils.{ MysqlDB, SQLQueries }
import com.twitter.finagle.Service
import com.twitter.finagle.http.{ Status, Response, Request }
import com.twitter.util.Future
import org.json.simple.JSONValue
import play.api.libs.json.{ Json, JsValue }

object Analysis {

  class CreateAnalysisImpl extends Service[Request, Response] {
    def apply(req: Request): Future[Response] = Future {
      val rep = Response(req.getProtocolVersion(), Status.Ok)
      val response = new util.HashMap[String, String]()
      val json: JsValue = Json.parse(req.getContentString())

      val userId = (json \ "userId").as[String]
      val name = (json \ "name").as[String]
      val projectId = (json \ "project_id").as[String]
      val datasetId = (json \ "dataset_id").as[String]

      val dataSql = String.format(SQLQueries.CREATE_ANALYSIS_SQL,
        name, datasetId, projectId, userId)
      val con = MysqlDB.getConnection()
      try {
        val statement = con.prepareStatement(dataSql, Statement.RETURN_GENERATED_KEYS)
        statement.executeUpdate()
        val rs = statement.getGeneratedKeys()
        var rowId = 0
        if (rs.next()) {
          rowId = rs.getInt(1)
        }

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

  class GetAnalysisImpl extends Service[Request, Response] {
    def apply(req: Request): Future[Response] = Future {
      val rep = Response(req.getProtocolVersion(), Status.Ok)
      val json: JsValue = Json.parse(req.getContentString())

      val userId = (json \ "userId").as[String]
      val projectId = (json \ "projectId").as[String]

      val sql = String.format(SQLQueries.GET_ANALYSIS_SQL, projectId, userId)

      val con = MysqlDB.getConnection()
      val statement = con.createStatement()
      val resultSet = statement.executeQuery(sql)

      val analysisList = new util.ArrayList[util.HashMap[String, String]]()

      while (resultSet.next) {
        val analysis = new util.HashMap[String, String]()
        analysis.put("name", resultSet.getString("name"))
        analysis.put("dataset_id", resultSet.getString("dataset_id"))
        analysis.put("user_id", resultSet.getString("user_id"))
        analysis.put("project_id", resultSet.getString("project_id"))
        analysis.put("id", resultSet.getString("id"))
        analysis.put("created_at", resultSet.getString("created_at"))
        analysisList.add(analysis)
      }
      rep.setContentString(JSONValue.toJSONString(analysisList))
      rep
    }
  }

}
