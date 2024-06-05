import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  findAll(@Req() request: Request): string {
    return this.catsService.getCats(request);
  }
}
