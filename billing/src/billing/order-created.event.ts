export class OrderCreatedEvent {
  constructor(
    readonly id: string,
    readonly userId: string,
    readonly price: number,
  ) {}
}
