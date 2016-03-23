import pika

connection = pika.BlockingConnection(pika.ConnectionParameters(
        host='localhost'))
channel = connection.channel()
channel.exchange_declare(exchange='datio',type='direct')
#result = channel.queue_declare()
queue_name = "hello"
channel.queue_declare(queue=queue_name, durable=True)
channel.queue_bind(exchange="datio",
                   queue=queue_name)

channel.basic_publish(exchange='datio',
                      routing_key=queue_name,
                      body='Hello World we are there!')
print(" [x] Sent 'Hello World!'")
connection.close()
