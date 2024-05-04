/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { Model } from 'mongoose';
import { Movie, MovieDocument } from './movie.model';
import { JwtService } from '@nestjs/jwt';
export declare class MovieService {
    private readonly movieModel;
    private jwtService;
    constructor(movieModel: Model<MovieDocument>, jwtService: JwtService);
    findAll(): Promise<Movie[]>;
    findOne(id: string): Promise<Movie>;
    create(createMovieDto: any): Promise<Movie>;
    update(id: string, updateMovieDto: any): Promise<Movie>;
    delete(id: string): Promise<Movie>;
    generateToken(payload: any): Promise<string>;
}
