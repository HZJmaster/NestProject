import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  // ParseIntPipe,
  // HttpException,
  // HttpStatus,
  Req,
  UseGuards,
  // UsePipes,
} from '@nestjs/common';
import { RolesGuard } from '../common/guards/roles.guard';
import { Roles } from '../common/decorators/roles.decorator';
import { Request } from 'express';
import { ApiQuery, ApiResponse } from '@nestjs/swagger';
import { CatsService } from './cats.service';
import { Cats, CatsRole } from './classes/cats';
import { ParseIntPipe } from 'src/common/pipes/parseInt.pipe';
// import { ValidationPipe } from 'src/common/pipes/validation.pipe';
import { CreateCatDto } from './dto/create-cat-class-example.dto';
// import { CreateCatDto, createCatSchema } from './dto/create-cat.dto';
// import { ZodValidationPipe } from 'src/common/pipes/zods/zodvalidation.pipe';

@Controller('cats')
@UseGuards(RolesGuard)
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get(':id')
  @Roles(['admin'])
  @ApiQuery({ name: 'name', required: true })
  @ApiQuery({ name: 'role', enum: CatsRole })
  @ApiResponse({
    status: 200,
    description: 'get CatData success',
    type: Cats,
  })
  findAll(
    @Req() request: Request,
    @Param('id', ParseIntPipe) id: number,
  ): string {
    // throw new HttpException(
    //   {
    //     status: HttpStatus.BAD_REQUEST,
    //     message: '请求参数id 必传',
    //     error: 'id is required',
    //   },
    //   HttpStatus.BAD_REQUEST,
    // );
    return this.catsService.getCats(id);
  }

  @Post('create')
  async create(@Body() createCatDto: CreateCatDto) {
    this.catsService.createCat(createCatDto);
  }
}
