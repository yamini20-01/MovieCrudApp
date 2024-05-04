/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { Connection } from 'mongoose';
export declare const movieProviders: {
    provide: string;
    useFactory: (connection: Connection) => import("mongoose").Model<import("./movie.model").Movie, {}, {}, {}, import("mongoose").Document<unknown, {}, import("./movie.model").Movie> & import("./movie.model").Movie & {
        _id: import("mongoose").Types.ObjectId;
    }, import("mongoose").Schema<import("./movie.model").Movie, import("mongoose").Model<import("./movie.model").Movie, any, any, any, import("mongoose").Document<unknown, any, import("./movie.model").Movie> & import("./movie.model").Movie & {
        _id: import("mongoose").Types.ObjectId;
    }, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, import("./movie.model").Movie, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<import("./movie.model").Movie>> & import("mongoose").FlatRecord<import("./movie.model").Movie> & {
        _id: import("mongoose").Types.ObjectId;
    }>>;
    inject: string[];
}[];
