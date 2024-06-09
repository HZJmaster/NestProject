import { resolve } from 'path';
import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './modules/cats.module';
import { MailerModule } from '@nest-modules/mailer';
import { AuthModule } from './modules/auth/auth.module';
import { StatusMonitorModule } from 'nest-status-monitor';
import statusConfig from './config/statusMonitor';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { EmailModule } from './modules/email/email.module';
import { ConfigModule, ConfigService } from 'nestjs-config';

// dbjcgfmowakfbehg
@Module({
  imports: [
    ConfigModule.load(resolve(__dirname, 'config', '**/!(*.d).{ts,js}')),
    StatusMonitorModule.setUp(statusConfig),
    MailerModule.forRootAsync({
      useFactory: (config: ConfigService) => config.get('email'),
      inject: [ConfigService],
    }),
    CatsModule,
    AuthModule,
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
