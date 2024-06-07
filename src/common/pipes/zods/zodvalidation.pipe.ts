import {
  PipeTransform,
  ArgumentMetadata,
  BadRequestException,
} from '@nestjs/common';
import { ZodSchema } from 'zod';

export class ZodValidationPipe implements PipeTransform {
  constructor(private schema: ZodSchema) {}
  transform(value: any, metadata: ArgumentMetadata) {
    console.log(metadata.type);
    try {
      const parsesValue = this.schema.parse(value);
      return parsesValue;
    } catch (error) {
      throw new BadRequestException('Zod Validation failed');
    }
  }
}
