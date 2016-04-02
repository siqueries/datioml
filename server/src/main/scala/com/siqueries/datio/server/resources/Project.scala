package com.siqueries.datio.server.resources

import java.util

import com.rabbitmq.client.Channel
import com.siqueries.datio.server.Main._
import com.siqueries.datio.server.utils.{ RabbitMQUtil, MysqlDB, SQLQueries }
import com.twitter.finagle.Service
import com.twitter.finagle.http.{ Status, Response, Request }
import com.twitter.util.Future
import play.api.libs.json.{ Json, JsValue }
import org.json.simple.JSONValue

object Project {

  class CreateProjectImpl extends Service[Request, Response] {
    def apply(req: Request): Future[Response] = Future {
      val rep = Response(req.getProtocolVersion(), Status.Ok)
      val response = new util.HashMap[String, String]()
      val json: JsValue = Json.parse(req.getContentString())
      val userId = (json \ "userId").as[String]
      val name = (json \ "name").as[String]
      val description = (json \ "description").as[String]
      val sql = String.format(SQLQueries.CREATE_PROJECT_SQL, name, description, userId)
      val con = MysqlDB.getConnection()
      try {
        val statement = con.prepareStatement(sql)
        val rowId = statement.executeUpdate()
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

  class GetProjectsImpl extends Service[Request, Response] {
    def apply(req: Request): Future[Response] = Future {
      val rep = Response(req.getProtocolVersion(), Status.Ok)
      val json: JsValue = Json.parse(req.getContentString())
      val userId = (json \ "userId").as[String]
      val sql = String.format(SQLQueries.GET_PROJECTS_SQL, userId)
      val con = MysqlDB.getConnection()
      val statement = con.createStatement()
      val resultSet = statement.executeQuery(sql)
      val projects = new util.ArrayList[util.HashMap[String, String]]()
      while (resultSet.next) {
        val project = new util.HashMap[String, String]()
        project.put("name", resultSet.getString("name"))
        project.put("description", resultSet.getString("description"))
        project.put("user_id", resultSet.getString("user_id"))
        project.put("id", resultSet.getString("id"))
        project.put("created_at", resultSet.getString("created_at"))
        projects.add(project)
      }
      rep.setContentString(JSONValue.toJSONString(projects))
      rep
    }
  }

  class GetProjectImpl extends Service[Request, Response] {
    def apply(req: Request): Future[Response] = Future {
      val rep = Response(req.getProtocolVersion(), Status.Ok)
      val json: JsValue = Json.parse(req.getContentString())

      val userId = (json \ "userId").as[String]
      val projectId = (json \ "projectId").as[String]

      val sql = String.format(SQLQueries.GET_PROJECT_SQL, userId, projectId)
      val con = MysqlDB.getConnection()
      val statement = con.createStatement()
      val resultSet = statement.executeQuery(sql)
      val project = new util.HashMap[String, String]()
      while (resultSet.next) {
        project.put("name", resultSet.getString("name"))
        project.put("description", resultSet.getString("description"))
        project.put("user_id", resultSet.getString("user_id"))
        project.put("id", resultSet.getString("id"))
        project.put("created_at", resultSet.getString("created_at"))
      }
      rep.setContentString(JSONValue.toJSONString(project))
      rep
    }
  }

  class UpdateProjectsImpl(channel: Channel, queue: String) extends Service[Request, Response] {
    def apply(req: Request): Future[Response] = Future {
      val rep = Response(req.getProtocolVersion(), Status.Ok)
      rep.setContentString(s"SiQueries Datio ML REST API v1.0")

      log.info("Home page")
      rep
    }
  }

  class DeleteProjectsImpl(channel: Channel, queue: String) extends Service[Request, Response] {
    def apply(req: Request): Future[Response] = Future {
      val rep = Response(req.getProtocolVersion(), Status.Ok)
      rep.setContentString(s"SiQueries Datio ML REST API v1.0")

      log.info("Home page")
      rep
    }
  }

}
