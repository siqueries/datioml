package com.siqueries.datio.server

import java.net.InetSocketAddress

import com.rabbitmq.client.Channel
import com.siqueries.datio.server.resources.Models._
import com.siqueries.datio.server.resources.Project._
import com.siqueries.datio.server.resources.Dataset._
import com.siqueries.datio.server.resources.Analysis._
import com.siqueries.datio.server.utils.{ MysqlDB, RabbitMQConfiguration, RabbitMQUtil, SQLQueries }
import com.twitter.finagle.http.{ Request, Response, _ }
import com.twitter.finagle.{ Http, Service }
import com.twitter.logging.Logging
import com.twitter.server.TwitterServer
import com.twitter.util.{ Await, Future }

object Main extends TwitterServer with Logging {

  class HomeImpl(channel: Channel, queue: String) extends Service[Request, Response] {
    def apply(req: Request): Future[Response] = Future {
      val rep = Response(req.getProtocolVersion(), Status.Ok)
      rep.setContentString(s"SiQueries Datio ML REST API v1.0")
      val sql = String.format(SQLQueries.CREATE_PROJECT_SQL, "start project", "this is a start project", "568c4672a8264674db8285f9")
      val con = MysqlDB.getConnection()
      try {
        val statement = con.prepareStatement(sql)
        val row_id = statement.executeUpdate()
      } catch {
        case ex: Exception => ex.printStackTrace()
      }
      RabbitMQUtil.publish(channel, queue, sql)
      log.info("Home page")
      rep
    }
  }

  def main() = {
    val sendingChannel = RabbitMQUtil.rabbitmqConnection()
    val queueName = RabbitMQUtil.getQueue(sendingChannel, RabbitMQConfiguration.RABBITMQ_QUEUE)
    RabbitMQUtil.setupPublisher(sendingChannel, queueName)

    def defaultHttpPort: Int = 49090
    flag("admin.port", new InetSocketAddress(defaultHttpPort), "Admin http server port")

    val connection = MysqlDB.getConnection()
    MysqlDB.createTables(connection)

    //HttpMuxer.addRichHandler("/", new HomeImpl(sendingChannel, queueName))
    HttpMuxer.addRichHandler("/api/v1/projects", new GetProjectsImpl)
    HttpMuxer.addRichHandler("/api/v1/project", new GetProjectImpl)
    HttpMuxer.addRichHandler("/api/v1/project/create", new CreateProjectImpl)

    HttpMuxer.addRichHandler("/api/v1/dataset/create", new CreateDatasetImpl)
    HttpMuxer.addRichHandler("/api/v1/datasets", new GetDataSetsImpl)
    HttpMuxer.addRichHandler("/api/v1/dataset", new GetDataSetImpl)
    //HttpMuxer.addRichHandler("/api/v1/datasets/metadata", new GetMetaDataSetsImpl)

    HttpMuxer.addRichHandler("/api/v1/analysis/create", new CreateAnalysisImpl)
    HttpMuxer.addRichHandler("/api/v1/analysis", new GetAnalysisImpl)
    HttpMuxer.addRichHandler("/api/v1/analysis/single", new GetSingleAnalysisImpl)

    HttpMuxer.addRichHandler("/api/v1/analysis/models/build", new BuildModelImpl(sendingChannel, queueName))
    HttpMuxer.addRichHandler("/api/v1/analysis/models", new GetAnalysisImpl)

    val httpPort = new java.net.InetSocketAddress(8080)
    val httpService = Http.serve(httpPort, HttpMuxer)
    Await.ready(httpService)
  }

}
