"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseModule = void 0;
const common_1 = require("@nestjs/common");
const pg_1 = require("pg");
const typeorm_1 = require("@nestjs/typeorm");
const config_1 = require("../config");
const API_KEY = '12345634';
const API_KEY_PROD = 'PROD1212121SA';
let DatabaseModule = class DatabaseModule {
};
DatabaseModule = __decorate([
    common_1.Global(),
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forRootAsync({
                inject: [config_1.default.KEY],
                useFactory: (configService) => {
                    const { user, host, name, password, port } = configService.database;
                    return {
                        type: 'postgres',
                        host,
                        port,
                        password,
                        username: user,
                        database: name,
                        synchronize: false,
                        autoLoadEntities: true,
                    };
                },
            }),
        ],
        providers: [
            {
                provide: 'API_KEY',
                useValue: process.env.NODE_ENV === 'prod' ? API_KEY_PROD : API_KEY,
            },
            {
                provide: 'PG',
                useFactory: (configService) => {
                    const { user, host, name, password, port } = configService.database;
                    const client = new pg_1.Client({
                        user,
                        host,
                        database: name,
                        password,
                        port,
                    });
                    client.connect();
                    return client;
                },
                inject: [config_1.default.KEY],
            },
        ],
        exports: ['API_KEY', 'PG', typeorm_1.TypeOrmModule],
    })
], DatabaseModule);
exports.DatabaseModule = DatabaseModule;
//# sourceMappingURL=database.module.js.map