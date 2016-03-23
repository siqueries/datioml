package com.siqueries.datio.server.utils

import com.rabbitmq.client.{ Connection, ConnectionFactory, Channel }

object RabbitMQUtil {

  def rabbitmqConnection(): Channel = {
    val factory = new ConnectionFactory()
    val connection: Connection = factory.newConnection()
    connection.createChannel()
  }

  def getQueue(sendingChannel: Channel, queueName: String): String = {
    sendingChannel.queueDeclare(queueName, true, false, false, null).getQueue
  }

  def setupPublisher(sendingChannel: Channel, queueName: String) {
    sendingChannel.exchangeDeclare(RabbitMQConfiguration.exchange, RabbitMQConfiguration.exchangeType)
    val queue = getQueue(sendingChannel, queueName)
    sendingChannel.queueBind(queue, RabbitMQConfiguration.exchange, "")
  }

  def publish(channel: Channel, queueName: String, msg: String) = {
    channel.basicPublish("", queueName, null, msg.getBytes())
  }

}
