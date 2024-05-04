"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.movieProviders = void 0;
const movie_model_1 = require("./movie.model");
exports.movieProviders = [
    {
        provide: 'MOVIE_MODEL',
        useFactory: (connection) => connection.model('Movie', movie_model_1.MovieModel),
        inject: ['DATABASE_CONNECTION'],
    },
];
//# sourceMappingURL=movie.providers.js.map