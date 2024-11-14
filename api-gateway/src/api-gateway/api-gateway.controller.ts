import { Controller, Post, Body } from '@nestjs/common';
import { ApiGatewayService } from './api-gateway.service';
import { CreateApiGatewayDto } from './dto/create-api-gateway.dto';

@Controller('api-gateway')
export class ApiGatewayController {
  constructor(private readonly apiGatewayService: ApiGatewayService) {}

  @Post()
  create(@Body() createApiGatewayDto: CreateApiGatewayDto) {
    console.log("createApiGatewayDto: ", createApiGatewayDto);
    return this.apiGatewayService.create(createApiGatewayDto);
  }
}
