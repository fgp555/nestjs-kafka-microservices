import { Controller } from '@nestjs/common';
import { AuthService } from './auth.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @MessagePattern('get_user')
  getUser(data: any) {
    console.info('AuthController: ', data);
    return this.authService.getUser(data);
  }
}
