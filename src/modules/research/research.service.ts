import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ResearchEntity } from './research.entity';

@Injectable()
export class ResearchService {
  constructor(
    @InjectRepository(ResearchEntity)
    private researchRepository: Repository<ResearchEntity>,
  ) {}

  async findAll(): Promise<ResearchEntity[]> {
    return await this.researchRepository.find();
  }

  async findOne(id: number): Promise<ResearchEntity> {
    return await this.researchRepository.findOneBy({ id });
  }

  async create(ResearchName: string): Promise<ResearchEntity | null> {
    return await this.researchRepository.save({ ResearchName });
  }
}
