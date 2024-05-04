import { SubscriptionService } from './subscription.service';
import { Subscription } from './subscription.model';
export declare class SubscriptionController {
    private readonly subscriptionService;
    constructor(subscriptionService: SubscriptionService);
    findAll(): Promise<Subscription[]>;
    findById(id: string): Promise<Subscription>;
    create(createSubscriptionDto: any): Promise<Subscription>;
    update(id: string, updateSubscriptionDto: any): Promise<Subscription>;
    delete(id: string): Promise<void>;
}
