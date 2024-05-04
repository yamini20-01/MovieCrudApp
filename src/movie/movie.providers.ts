// src/movie/movie.providers.ts

import { Connection } from 'mongoose';
import { MovieModel } from './movie.model';

export const movieProviders = [
  {
    provide: 'MOVIE_MODEL',
    useFactory: (connection: Connection) => connection.model('Movie', MovieModel),
    inject: ['DATABASE_CONNECTION'],
  },
];
