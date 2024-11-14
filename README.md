```bash
npm install @nestjs/microservices kafkajs
npm i morgan

# Produce un mensaje:
kafka-console-producer --bootstrap-server localhost:9092 --topic order_created

# Consume un mensaje:
kafka-console-consumer --bootstrap-server localhost:9092 --topic order_created --from-beginning
kafka-console-consumer --bootstrap-server localhost:9092 --topic order_created --from-beginning --consumer-property group.id=my-consumer-id
```

- Source: https://github.com/mguay22/nestjs-kafka-microservices.git
- YouTube: https://youtu.be/JJEKPqSlXvk
