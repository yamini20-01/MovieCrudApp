"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionService = void 0;
const common_1 = require("@nestjs/common");
let SubscriptionService = class SubscriptionService {
    constructor() {
        this.subscriptions = [];
    }
    async findAll() {
        return this.subscriptions;
    }
    async findById(userId) {
        return this.subscriptions.find(subscription => subscription.userId === userId);
    }
    async create(subscriptionData) {
        const newSubscription = { userId: (this.subscriptions.length + 1).toString(), ...subscriptionData };
        this.subscriptions.push(newSubscription);
        return newSubscription;
    }
    async update(userId, updateData) {
        const subscriptionIndex = this.subscriptions.findIndex(subscription => subscription.userId === userId);
        if (subscriptionIndex === -1) {
            throw new Error('Subscription not found');
        }
        this.subscriptions[subscriptionIndex] = { ...this.subscriptions[subscriptionIndex], ...updateData };
        return this.subscriptions[subscriptionIndex];
    }
    async delete(userId) {
        this.subscriptions = this.subscriptions.filter(subscription => subscription.userId !== userId);
    }
};
exports.SubscriptionService = SubscriptionService;
exports.SubscriptionService = SubscriptionService = __decorate([
    (0, common_1.Injectable)()
], SubscriptionService);
//# sourceMappingURL=subscription.service.js.map