import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { GetUserRequestDto } from './dto/get-user-request.dto';
import { OrderCreatedEvent } from './order-created.event';

@Injectable()
export class BillingService {
  constructor(
    @Inject('AUTH_SERVICE') private readonly authClient: ClientKafka,
  ) {}

  handleOrderCreated(data: OrderCreatedEvent) {
    this.authClient
      .send('get_user', new GetUserRequestDto(data.userId))
      .subscribe((user) => {
        console.log(
          `Billing user with stripe ID ${user.stripeUserId} a price of $${data.price}`,
        );
      });
  }
}
