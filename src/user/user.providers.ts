// src/user/user.providers.ts
import { Connection } from 'mongoose';
import { UserModel } from './user.model';

export const userProviders = [
  {
    provide: 'USER_MODEL',
    useFactory: (connection: Connection) => connection.model('User', UserModel),
    inject: ['DATABASE_CONNECTION'],
  },
];
