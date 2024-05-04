import { Controller, Get, Post, Body, Param, Put, Delete, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard'; 
import { MovieService } from './movie.service';
import { Movie } from './movie.model';

@Controller('movies')
@UseGuards(JwtAuthGuard)
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Get()
  @UseGuards(JwtAuthGuard) 
  async findAll(): Promise<Movie[]> {
    return this.movieService.findAll();
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard) 
  async findOne(@Param('id') id: string): Promise<Movie> {
    return this.movieService.findOne(id);
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  async create(@Body() createMovieDto: any): Promise<Movie> {
    return this.movieService.create(createMovieDto);
  }

  @Put(':id')
  @UseGuards(JwtAuthGuard)
  async update(@Param('id') id: string, @Body() updateMovieDto: any): Promise<Movie> {
    return this.movieService.update(id, updateMovieDto);
  }
  
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async remove(@Param('id') id: string): Promise<Movie> {
    return this.movieService.delete(id);
  }
}
