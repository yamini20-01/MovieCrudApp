"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseProviders = void 0;
const mongoose_1 = require("mongoose");
exports.databaseProviders = [
    {
        provide: 'DATABASE_CONNECTION',
        useFactory: async () => await mongoose_1.default.connect('mongodb://localhost/movieCrudApp', {}),
    },
];
//# sourceMappingURL=database.providers.js.map