import { createConnection } from 'typeorm';
import { Item } from '../item/item';
export const dbProvider = {
  provide: 'DbConnectionToken',
  useFactory: async (name: string) =>
    await createConnection({
      type: 'postgres',
      host: process.env.DATABASE_HOST,
      port: parseInt(process.env.DATABASE_PORT, 10),
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      entities: [Item],
      synchronize: true, // DEV only, do not use on PROD!
    }),
};
