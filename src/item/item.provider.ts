import { Connection } from 'typeorm';
import { Item } from './item';

export const itemProvider = [
  {
    provide: 'ItemRepositoryToken',
    useFactory: (connection: Connection) => connection.getRepository(Item),
    inject: ['DbConnectionToken'],
  },
];
