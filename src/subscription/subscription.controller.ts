import { Controller, Get, Post, Body, Param, Put, Delete, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { SubscriptionService } from './subscription.service';
import { Subscription } from './subscription.model';

@Controller('subscriptions')
@UseGuards(JwtAuthGuard)
export class SubscriptionController {
  constructor(private readonly subscriptionService: SubscriptionService) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  async findAll(): Promise<Subscription[]> {
    return this.subscriptionService.findAll();
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  async findById(@Param('id') id: string): Promise<Subscription> {
    return this.subscriptionService.findById(id);
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  async create(@Body() createSubscriptionDto: any): Promise<Subscription> {
    return this.subscriptionService.create(createSubscriptionDto);
  }

  @Put(':id')
  @UseGuards(JwtAuthGuard)
  async update(@Param('id') id: string, @Body() updateSubscriptionDto: any): Promise<Subscription> {
    return this.subscriptionService.update(id, updateSubscriptionDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  async delete(@Param('id') id: string): Promise<void> {
    return this.subscriptionService.delete(id);
  }
}
