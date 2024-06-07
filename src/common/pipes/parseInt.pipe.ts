import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';

@Injectable()
export class ParseIntPipe implements PipeTransform<string> {
  async transform(value: string, metadata: ArgumentMetadata) {
    console.log(metadata);
    const val = parseInt(value, 10);
    if (isNaN(val)) {
      throw new BadRequestException('Vaildation failed');
    }
    return val;
  }
}
