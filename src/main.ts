import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';
import { ValidationPipe } from './common/pipes/validation.pipe';
// import { RolesGuard } from './common/guards/roles.guard';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 全局过滤器
  app.useGlobalFilters(new HttpExceptionFilter());
  // 全局范围管道
  app.useGlobalPipes(new ValidationPipe());
  // 全局角色控制守卫
  // app.useGlobalGuards(new RolesGuard());
  // 设置swagger 文档相关配置
  const config = new DocumentBuilder()
    .addBasicAuth()
    .setTitle('Cats example')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .addTag('cats')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3001);
}

bootstrap();
