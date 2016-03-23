package com.siqueries.datio.server.resources

import java.util
import com.twitter.logging._
import com.rabbitmq.client.Channel
import com.siqueries.datio.server.utils.{ RabbitMQUtil, MysqlDB, SQLQueries }
import com.twitter.finagle.Service
import com.twitter.finagle.http.{ Status, Response, Request }
import com.twitter.util.Future
import org.json.simple.JSONValue
import play.api.libs.json.{ Json, JsValue }

object Models {

  val log = Logger.get(Models.getClass)

  class BuildModelImpl(channel: Channel, queue: String) extends Service[Request, Response] {
    def apply(req: Request): Future[Response] = Future {
      val rep = Response(req.getProtocolVersion(), Status.Ok)
      val content = req.getContentString()
      val json: JsValue = Json.parse(content)

      val userId = (json \ "userId").as[String]
      val projectId = (json \ "projectId").as[String]
      val analysisId = (json \ "analysisId").as[String]
      val modelName = (json \ "modelName").as[String]

      val sql = String.format(SQLQueries.GET_SINGLE_ANALYSIS_SQL, userId, analysisId)
      val con = MysqlDB.getConnection()
      val statement = con.createStatement()
      val resultSet = statement.executeQuery(sql)
      val analysis = new util.HashMap[String, String]()

      while (resultSet.next) {
        analysis.put("name", resultSet.getString("name"))
        analysis.put("dataset_id", resultSet.getString("dataset_id"))
        analysis.put("project_id", resultSet.getString("project_id"))
        analysis.put("user_id", resultSet.getString("user_id"))
        analysis.put("id", resultSet.getString("id"))
        analysis.put("created_at", resultSet.getString("created_at"))
      }

      val metaSql = String.format(SQLQueries.GET_META_DATA_SQL, userId, analysis.get("dataset_id"))
      val conn = MysqlDB.getConnection()
      val stmt = conn.createStatement()
      val resultSets = statement.executeQuery(metaSql)

      val fileData = new util.HashMap[String, String]()
      while (resultSets.next) {
        fileData.put("fileName", resultSets.getString("file_name"))
      }

      val filePath = s"/opt/datioml/ui/csv_data/${fileData.get("fileName")}"

      val tableName = fileData.get("fileName").replace(".csv", "").replace("-", "_")

      val queueData = new util.HashMap[String, String]()
      queueData.put("filePath", filePath)
      queueData.put("algorithmContent", content)
      queueData.put("libsvm", tableName)
      queueData.put("tableName", s"table_${tableName}")

      RabbitMQUtil.publish(channel, queue, JSONValue.toJSONString(queueData))
      log.info(s"MLJob sent to MLEngine ${tableName}")

      rep.setContentString(JSONValue.toJSONString(""))
      rep
    }
  }

}
