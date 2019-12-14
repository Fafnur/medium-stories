import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  index() {
    return { message: 'Welcome to backend/api!' };
  }
}
