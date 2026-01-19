import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiResponse, ApiOperation } from '@nestjs/swagger';

export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  @ApiOperation({ summary: 'Get a hello message' })
  @ApiResponse({ status: 200, description: 'Return hello string.' })
  getHello(): string {
    return this.appService.getHello();
  }
}
