```sh
npm install @nestjs/microservices kafkajs morgan



# Produce un mensaje:
kafka-console-producer --bootstrap-server localhost:9092 --topic order_created

# Consume un mensaje:
kafka-console-consumer --bootstrap-server localhost:9092 --topic order_created --from-beginning
kafka-console-consumer --bootstrap-server localhost:9092 --topic order_created --from-beginning --consumer-property group.id=my-consumer-id
