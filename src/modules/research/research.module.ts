import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ResearchController } from './research.controller';
import { ResearchService } from './research.service';
import { ResearchEntity } from './research.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ResearchEntity])],
  controllers: [ResearchController],
  providers: [ResearchService],
})
export class ResearchModule {}
