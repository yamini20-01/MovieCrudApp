import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MovieController } from './movie.controller';
import { MovieService } from './movie.service';
import { MovieModel } from './movie.model';
import { movieProviders } from 'src/movie/movie.providers';
import { DatabaseModule } from 'src/database/database.module';
import { Movie } from './movie.model';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { JwtModule } from '@nestjs/jwt';
import { forwardRef } from '@nestjs/common';
@Module({
  imports: [
    
    JwtModule.register({
        secret: 'JWT_SECRET', 
        signOptions: { expiresIn: '1d' },
      }),
    
    DatabaseModule,
    forwardRef(() => MovieModule),
    MongooseModule.forFeature([{ name: 'Movie', schema: MovieModel }])],
  controllers: [MovieController],
  providers: [
    MovieService,JwtAuthGuard,
    ...movieProviders,{ provide: Movie.name, useFactory: () => MovieModel },
  ],
  exports: [JwtModule],
})
export class MovieModule {}
