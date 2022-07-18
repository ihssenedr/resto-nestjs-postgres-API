import { Connection } from 'typeorm';
import { Manager } from './manager.entity';

export const managerProvider = [
  {
    provide: 'ManagerRepositoryToken',
    useFactory: (connection: Connection) => connection.getRepository(Manager),
    inject: ['DbConnectionToken'],
  },
];
