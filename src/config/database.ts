import { join } from 'path';

export default {
  type: 'mysql',
  host: '118.89.16.150',
  port: 3306,
  username: 'root',
  password: '3838438Cyx.',
  database: 'scholarly',
  entities: [join(__dirname, '../', '**/**.entity{.ts,.js}')],
  synchronize: true,
};
