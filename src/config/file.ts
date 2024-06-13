import { join } from 'path';
import { diskStorage } from 'multer';

export default {
  root: join(__dirname, '..', 'uploads'),
  storage: diskStorage({
    destination: join(
      __dirname,
      '..',
      'uploads',
      `${new Date().toLocaleDateString().replace(/\//g, '-')}`,
    ),
    filename: (req, file, cb) => {
      const filename = `${Date.now()}.${file.mimetype.split('/')[1]}`;
      cb(null, filename);
    },
  }),
};
