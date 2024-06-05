import { Injectable } from '@nestjs/common';
import { Request } from 'express';

@Injectable()
export class CatsService {
  getCats(req: Request): string {
    return `this is your create Cat!${req}`;
  }
}
