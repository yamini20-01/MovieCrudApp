import { Injectable, Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { Movie, MovieDocument } from './movie.model';
import { InjectModel } from '@nestjs/mongoose';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class MovieService {
  constructor(
    @InjectModel(Movie.name)
    private readonly movieModel: Model<MovieDocument>,private jwtService: JwtService,
  ) {}

  async findAll(): Promise<Movie[]> {
    return await this.movieModel.find().exec();
  }

  async findOne(id: string): Promise<Movie> {
    return await this.movieModel.findById(id).exec();
  }

  async create(createMovieDto: any): Promise<Movie> {
    const createdMovie = new this.movieModel(createMovieDto);
    return await createdMovie.save();
  }

  async update(id: string, updateMovieDto: any): Promise<Movie> {
    return await this.movieModel.findByIdAndUpdate(id, updateMovieDto, { new: true }).exec();
  }

  async delete(id: string): Promise<Movie> {
    return await this.movieModel.findByIdAndDelete(id).exec();
  }

  async generateToken(payload: any): Promise<string> {
    return this.jwtService.sign(payload);
  }
}
