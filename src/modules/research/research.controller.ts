import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { ResearchService } from './research.service';
import { ResearchEntity } from './research.entity';
import { ParseIntPipe } from 'src/common/pipes/parseInt.pipe';

@Controller('research')
export class ResearchController {
  constructor(private readonly researchService: ResearchService) {}

  @Get('All')
  findAll(): Promise<ResearchEntity[]> {
    return this.researchService.findAll();
  }

  @Get('One')
  findOne(@Query('id', ParseIntPipe) id: number) {
    return this.researchService.findOne(id);
  }

  @Post('create')
  create(
    @Body('ResearchName') ResearchName: string,
  ): Promise<ResearchEntity | null> {
    return this.researchService.create(ResearchName);
  }
}
