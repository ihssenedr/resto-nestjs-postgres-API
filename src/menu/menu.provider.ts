import { Connection } from 'typeorm';
import { Menu } from './menu.entity';

export const menuProvider = [
  {
    provide: 'MenuRepositoryToken',
    useFactory: (connection: Connection) => connection.getRepository(Menu),
    inject: ['DbConnectionToken'],
  },
];
