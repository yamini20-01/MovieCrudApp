import { Injectable } from '@nestjs/common';
import { Subscription } from './subscription.model';

@Injectable()
export class SubscriptionService {
  private subscriptions: Subscription[] = [];

  async findAll(): Promise<Subscription[]> {
    return this.subscriptions;
  }

  async findById(userId: string): Promise<Subscription> {
    return this.subscriptions.find(subscription => subscription.userId === userId);
  }

  async create(subscriptionData: any): Promise<Subscription> {
    const newSubscription = { userId: (this.subscriptions.length + 1).toString(), ...subscriptionData };
    this.subscriptions.push(newSubscription);
    return newSubscription;
  }

  async update(userId: string, updateData: any): Promise<Subscription> {
    const subscriptionIndex = this.subscriptions.findIndex(subscription => subscription.userId === userId);
    if (subscriptionIndex === -1) {
      throw new Error('Subscription not found');
    }
    this.subscriptions[subscriptionIndex] = { ...this.subscriptions[subscriptionIndex], ...updateData };
    return this.subscriptions[subscriptionIndex];
  }

  async delete(userId: string): Promise<void> {
    this.subscriptions = this.subscriptions.filter(subscription => subscription.userId !== userId);
  }
}
