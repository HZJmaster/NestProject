import { Injectable } from '@nestjs/common';
import { MailerService } from '@nest-modules/mailer';

@Injectable()
export class EmailService {
  constructor(private readonly mailerService: MailerService) {}

  sendEmail() {
    this.mailerService.sendMail({
      to: '3555474128@qq.com',
      // from: '846163332@qq.com',
      subject: 'I want to send this email for you!',
      template: 'welcome',
    });
  }
}
