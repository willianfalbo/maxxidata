import 'dotenv/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { checkConfig } from './helper';
import * as path from 'path';

const migrationsPath = path.join(__dirname, '..', 'database', 'migrations');

const typeOrmOptions: TypeOrmModuleOptions = {
  type: 'postgres',
  host: checkConfig(process.env.DB_HOST),
  port: checkConfig(process.env.DB_PORT),
  username: checkConfig(process.env.DB_USER),
  password: checkConfig(process.env.DB_PASSWORD),
  database: checkConfig(process.env.DB_NAME),
  entities: [path.join(__dirname, '..', '**', '*.entity{.ts,.js}')],
  synchronize: false,
  migrations: [path.join(migrationsPath, '**', '*{.ts,.js}')],
  cli: {
    migrationsDir: migrationsPath,
  },
};

// IMPORTANT: export must be like below; otherwise, typeorm migrations cli will not work
// https://github.com/ambroiseRabier/typeorm-nestjs-migration-example
export = typeOrmOptions;
