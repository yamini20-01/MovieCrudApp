import { Subscription } from './subscription.model';
export declare class SubscriptionService {
    private subscriptions;
    findAll(): Promise<Subscription[]>;
    findById(userId: string): Promise<Subscription>;
    create(subscriptionData: any): Promise<Subscription>;
    update(userId: string, updateData: any): Promise<Subscription>;
    delete(userId: string): Promise<void>;
}
