import { Controller } from '@nestjs/common';
import { AppService } from './app.service';
import { TypedBody, TypedRoute } from '@nestia/core';
import { CreateHelloDto, CreateHelloReturn } from 'utils';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @TypedRoute.Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @TypedRoute.Post()
  createHello(@TypedBody() input: CreateHelloDto): CreateHelloReturn {
    return this.appService.createHello(input);
  }
}
