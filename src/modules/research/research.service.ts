import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DataSource } from 'typeorm';
import { ResearchEntity } from './research.entity';

@Injectable()
export class ResearchService {
  constructor(
    @InjectRepository(ResearchEntity)
    private researchRepository: Repository<ResearchEntity>,
    private dataSource: DataSource,
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

  async createMany(ResearchNames: string[]) {
    // 使用事务
    const queryRunner = this.dataSource.createQueryRunner();

    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      ResearchNames.forEach(async (item) => {
        await queryRunner.manager.save(item);
      });
      await queryRunner.commitTransaction();
    } catch (err) {
      // since we have errors lets rollback the changes we made
      await queryRunner.rollbackTransaction();
    } finally {
      // you need to release a queryRunner which was manually instantiated
      await queryRunner.release();
    }
  }
}
