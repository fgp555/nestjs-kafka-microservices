import { Controller, Inject, OnModuleInit } from '@nestjs/common';
import { BillingService } from './billing.service';
import { ClientKafka, EventPattern } from '@nestjs/microservices';

@Controller('billing')
export class BillingController implements OnModuleInit {
  constructor(
    private readonly billingService: BillingService,

    @Inject('AUTH_SERVICE')
    private readonly authClient: ClientKafka,
  ) {}

  @EventPattern('order_created')
  handleOrderCreated(data: any) {
    this.billingService.handleOrderCreated(data);
  }

  onModuleInit() {
    this.authClient.subscribeToResponseOf('get_user');
  }
}
