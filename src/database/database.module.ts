import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { databaseProviders } from 'src/database.providers';
@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/movieCrudApp'),],
  providers: [...databaseProviders],
  exports: [...databaseProviders],
})
export class DatabaseModule {}
