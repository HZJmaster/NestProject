import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './modules/cats.module';
import { MailerModule } from '@nest-modules/mailer';
import { PugAdapter } from '@nest-modules/mailer/dist/adapters/pug.adapter';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { EmailModule } from './modules/email/email.module';
import * as path from 'path';

// dbjcgfmowakfbehg
@Module({
  imports: [
    MailerModule.forRootAsync({
      useFactory: () => ({
        transport: 'smtps://846163332@qq.com:dbjcgfmowakfbehg@smtp.qq.com',
        defaults: {
          from: 'scholarlyServe<846163332@qq.com>',
        },
        template: {
          dir: path.join(__dirname, './templates/email'),
          adapter: new PugAdapter(),
          options: {
            strict: true,
          },
        },
      }),
    }),
    CatsModule,
    EmailModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('cats');
  }
}
