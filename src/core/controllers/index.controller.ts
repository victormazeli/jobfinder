import { Controller, Get, Render } from '@nestjs/common';

@Controller('/')
export class IndexController {
  @Get()
  @Render('pages/index')
  root() {
    return { message: 'Hello world!' };
  }
}
