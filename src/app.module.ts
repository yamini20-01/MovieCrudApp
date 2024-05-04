import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { databaseProviders } from './database.providers';
import { DatabaseModule } from './database/database.module';
import { MovieModule } from './movie/movie.module';
import { MovieService } from './movie/movie.service';
import { movieProviders } from './movie/movie.providers';
import { MovieController } from './movie/movie.controller';
import { UserController } from './user/user.controller';
import { JwtModule } from '@nestjs/jwt';
import { MovieModel } from './movie/movie.model';
import { SubscriptionModule } from './subscription/subscription.module'; 
require('dotenv').config();
@Module({
  imports: [
    JwtModule.register({
    secret: 'JWT_SECRET',
    signOptions: { expiresIn: '1d' },
  }),
    MongooseModule.forRoot('mongodb://localhost/movieCrudApp', {
    }),
    MongooseModule.forFeature([{ name: 'Movie', schema: MovieModel }]),
    AuthModule,
    UserModule,
    DatabaseModule,
    UserModule,
    MovieModule,
    SubscriptionModule,
  ],
  controllers:[MovieController,UserController],
  providers: [...databaseProviders,MovieService,...movieProviders],
})
export class AppModule {}
