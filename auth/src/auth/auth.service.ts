import { Injectable } from '@nestjs/common';
import { getUserRequestDto } from './dto/get-user-request.dto';

@Injectable()
export class AuthService {
  private readonly users = [
    { userId: '123', stripeUserId: '4567' },
    { userId: '456', stripeUserId: '8765' },
  ];

  getUser(getUserRequest: getUserRequestDto) {
    return this.users.find((user) => user.userId === getUserRequest.userId);
  }
}
