import { Inject, Injectable } from '@nestjs/common';
import { CreateApiGatewayDto } from './dto/create-api-gateway.dto';
import { ClientKafka } from '@nestjs/microservices';
import { OrderCreatedEvent } from './order-created-event';

@Injectable()
export class ApiGatewayService {
  constructor(
    @Inject('BILLING_SERVICE')
    private readonly billingClient: ClientKafka,
  ) {}

  create(createApiGatewayDto: CreateApiGatewayDto) {
    const { userId, price } = createApiGatewayDto;

    this.billingClient.emit(
      'order_created',
      new OrderCreatedEvent('123', userId, price),
    );

    return { ...createApiGatewayDto };
  }
}
