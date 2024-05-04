// src/user/user.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserModel } from './user.model';
import { DatabaseModule } from '../database/database.module';
import { userProviders } from './user.providers';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from 'src/auth/auth.service';
@Module({   
  imports:[DatabaseModule,
    JwtModule.register({
        secret: process.env.JWT_SECRET || 'JWT_SECRET',
        signOptions: { expiresIn: '1d' },
      }),
    MongooseModule.forFeature([{ name: 'User', schema: UserModel }])],
   
  controllers: [UserController],
  providers: [AuthService,UserService,...userProviders],
  exports: [AuthService,UserService],
})
export class UserModule {}
