/**
 * Copyright 2016, SiQueries, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package com.siqueries.datioml.executors

import akka.actor.{Props, ActorSystem, ActorRef}
import com.rabbitmq.client.AMQP.BasicProperties
import com.rabbitmq.client.{ConnectionFactory, Envelope, DefaultConsumer, Channel}
import com.siqueries.datioml.executors.workflows.{WorkflowReceiverActor, HelloActor}
import com.thenewmotion.akka.rabbitmq.{ChannelActor, CreateChannel, ConnectionActor}
import org.apache.spark.sql.SQLContext
import org.apache.spark.{SparkConf, Logging, SparkContext}

object DatioML extends App with Logging{

  implicit val system = ActorSystem("SiQueriesDatioML")
  val exchange = "datioml"
  val exchangeType = "direct"
  val sparkContext = createSparkContext()
  val sqlContext = createSqlContext(sparkContext)


  val factory = new ConnectionFactory()
  val connection = system.actorOf(ConnectionActor.props(factory), "siqueries")

  val workflowReceiverActor = system.actorOf(Props(new WorkflowReceiverActor(sparkContext, sqlContext)), "workflowReceiverActor")

  connection ! CreateChannel(ChannelActor.props(setupSubscriber), Some("subscriber"))

  log.info("starting local master...")
  //localCluster.startLocalMaster(getSparkConf)
  log.info("starting local workers...")
  //localCluster.startWorkers(getSparkConf)

  system.awaitTermination()

  cleanup(sparkContext)


  def setupSubscriber(channel: Channel, self: ActorRef) {
    channel.exchangeDeclare(exchange, "direct")
    val queue_name = "hello"
    //val queue = channel.queueDeclare().getQueue
    val queue = channel.queueDeclare(queue_name, true, false, false, null).getQueue
    channel.queueBind(queue, exchange, "")
    val consumer = new DefaultConsumer(channel) {
      override def handleDelivery(consumerTag: String, envelope: Envelope, properties: BasicProperties, body: Array[Byte]) {
        val workflowReceiverActor = system.actorSelection("/user/workflowReceiverActor")
        workflowReceiverActor ! fromBytes(body)
      }
    }
    channel.basicConsume(queue, true, consumer)
  }

  def fromBytes(x: Array[Byte]) = new String(x, "UTF-8")
  def toBytes(x: Any) = x.toString.getBytes("UTF-8")

  private def cleanup(sparkContext: SparkContext): Unit = {
    log.debug("Cleaning up...")
    sparkContext.stop()
    log.debug("Spark terminated!")
  }

  def createSparkContext(): SparkContext = {
    val sparkConf = new SparkConf()
    sparkConf.setAppName("DatioML")
      .setMaster("local[*]")
      .set("spark.serializer", "org.apache.spark.serializer.KryoSerializer")
      .registerKryoClasses(Array())
      //.setJars(Array("/srv/dev/ds/ml-workflow/lib/amqp-client-3.4.2.jar"))

    new SparkContext(sparkConf)
  }

  def createSqlContext(sparkContext: SparkContext): SQLContext = {
    val sqlContext = new SQLContext(sparkContext)
    //UserDefinedFunctions.registerFunctions(sqlContext.udf)
    sqlContext
  }



}
