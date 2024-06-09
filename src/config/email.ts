import { join } from 'path';
import { PugAdapter } from '@nest-modules/mailer/dist/adapters/pug.adapter';

export default {
  transport: 'smtps://846163332@qq.com:dbjcgfmowakfbehg@smtp.qq.com',
  defaults: {
    from: 'scholarlyServe<846163332@qq.com>',
  },
  template: {
    dir: join(__dirname, '../templates/email'),
    adapter: new PugAdapter(),
    options: {
      strict: true,
    },
  },
};
