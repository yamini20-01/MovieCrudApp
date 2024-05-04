"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const subscription_controller_1 = require("./subscription.controller");
const subscription_service_1 = require("./subscription.service");
const subscription_model_1 = require("./subscription.model");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const jwt_1 = require("@nestjs/jwt");
const common_2 = require("@nestjs/common");
const user_module_1 = require("../user/user.module");
let SubscriptionModule = class SubscriptionModule {
};
exports.SubscriptionModule = SubscriptionModule;
exports.SubscriptionModule = SubscriptionModule = __decorate([
    (0, common_1.Module)({
        imports: [
            jwt_1.JwtModule.register({
                secret: 'JWT_SECRET',
                signOptions: { expiresIn: '1d' },
            }),
            (0, common_2.forwardRef)(() => user_module_1.UserModule),
            mongoose_1.MongooseModule.forFeature([{ name: subscription_model_1.Subscription.name, schema: subscription_model_1.SubscriptionSchema }]),
        ],
        controllers: [subscription_controller_1.SubscriptionController],
        providers: [subscription_service_1.SubscriptionService, jwt_auth_guard_1.JwtAuthGuard],
        exports: [jwt_1.JwtModule,],
    })
], SubscriptionModule);
//# sourceMappingURL=subscription.module.js.map