import {
  Controller,
  Get,
  // HttpException,
  // HttpStatus,
  Req,
} from '@nestjs/common';
import { Request } from 'express';
import { ApiQuery, ApiResponse } from '@nestjs/swagger';
import { CatsService } from './cats.service';
import { Cats, CatsRole } from './classes/cats';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  @ApiQuery({ name: 'name', required: true })
  @ApiQuery({ name: 'role', enum: CatsRole })
  @ApiResponse({
    status: 200,
    description: 'get CatData success',
    type: Cats,
  })
  findAll(@Req() request: Request): string {
    // throw new HttpException(
    //   {
    //     status: HttpStatus.BAD_REQUEST,
    //     message: '请求参数id 必传',
    //     error: 'id is required',
    //   },
    //   HttpStatus.BAD_REQUEST,
    // );
    return this.catsService.getCats(request);
  }
}
