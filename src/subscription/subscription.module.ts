import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SubscriptionController } from './subscription.controller';
import { SubscriptionService } from './subscription.service';
import { Subscription, SubscriptionSchema } from './subscription.model';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { JwtModule } from '@nestjs/jwt';
import { forwardRef } from '@nestjs/common';
import { UserModule } from '../user/user.module';

@Module({
  imports: [
    JwtModule.register({
      secret: 'JWT_SECRET',
      signOptions: { expiresIn: '1d' },
    }),
    forwardRef(() => UserModule),
    MongooseModule.forFeature([{ name: Subscription.name, schema: SubscriptionSchema }]),
  ],
  controllers: [SubscriptionController],
  providers: [SubscriptionService, JwtAuthGuard],
  exports: [JwtModule,],
})
export class SubscriptionModule {}
