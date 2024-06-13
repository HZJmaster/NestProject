import { Injectable } from '@nestjs/common';
import { ConfigService } from 'nestjs-config';

@Injectable()
export class UploadService {
  constructor(private readonly configService: ConfigService) {}

  upload(file: Express.Multer.File) {
    console.log(file);
  }
}
