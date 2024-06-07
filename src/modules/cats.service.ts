import { Injectable } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';

@Injectable()
export class CatsService {
  getCats(id: number): string {
    return `this is your create Cat!${id}`;
  }

  createCat(createCat: CreateCatDto) {
    console.log(createCat);
    return createCat;
  }
}
