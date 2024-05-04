"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovieService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const movie_model_1 = require("./movie.model");
const mongoose_2 = require("@nestjs/mongoose");
const jwt_1 = require("@nestjs/jwt");
let MovieService = class MovieService {
    constructor(movieModel, jwtService) {
        this.movieModel = movieModel;
        this.jwtService = jwtService;
    }
    async findAll() {
        return await this.movieModel.find().exec();
    }
    async findOne(id) {
        return await this.movieModel.findById(id).exec();
    }
    async create(createMovieDto) {
        const createdMovie = new this.movieModel(createMovieDto);
        return await createdMovie.save();
    }
    async update(id, updateMovieDto) {
        return await this.movieModel.findByIdAndUpdate(id, updateMovieDto, { new: true }).exec();
    }
    async delete(id) {
        return await this.movieModel.findByIdAndDelete(id).exec();
    }
    async generateToken(payload) {
        return this.jwtService.sign(payload);
    }
};
exports.MovieService = MovieService;
exports.MovieService = MovieService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(movie_model_1.Movie.name)),
    __metadata("design:paramtypes", [mongoose_1.Model, jwt_1.JwtService])
], MovieService);
//# sourceMappingURL=movie.service.js.map