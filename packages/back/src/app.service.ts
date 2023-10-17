import { Injectable } from '@nestjs/common';
import { CreateHelloDto, CreateHelloReturn } from 'utils';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  createHello(data: CreateHelloDto): CreateHelloReturn {
    return { msg: 'Hello World!', name: data.name };
  }
}
