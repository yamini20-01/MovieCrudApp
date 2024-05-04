"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovieModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const movie_controller_1 = require("./movie.controller");
const movie_service_1 = require("./movie.service");
const movie_model_1 = require("./movie.model");
const movie_providers_1 = require("./movie.providers");
const database_module_1 = require("../database/database.module");
const movie_model_2 = require("./movie.model");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const jwt_1 = require("@nestjs/jwt");
const common_2 = require("@nestjs/common");
let MovieModule = class MovieModule {
};
exports.MovieModule = MovieModule;
exports.MovieModule = MovieModule = __decorate([
    (0, common_1.Module)({
        imports: [
            jwt_1.JwtModule.register({
                secret: 'JWT_SECRET',
                signOptions: { expiresIn: '1d' },
            }),
            database_module_1.DatabaseModule,
            (0, common_2.forwardRef)(() => MovieModule),
            mongoose_1.MongooseModule.forFeature([{ name: 'Movie', schema: movie_model_1.MovieModel }])
        ],
        controllers: [movie_controller_1.MovieController],
        providers: [
            movie_service_1.MovieService, jwt_auth_guard_1.JwtAuthGuard,
            ...movie_providers_1.movieProviders, { provide: movie_model_2.Movie.name, useFactory: () => movie_model_1.MovieModel },
        ],
        exports: [jwt_1.JwtModule],
    })
], MovieModule);
//# sourceMappingURL=movie.module.js.map