import { ConfigType } from '@nestjs/config';
import { Client } from 'pg';
import config from './config';
export declare class AppService {
    private tasks;
    private clientPg;
    private configService;
    constructor(tasks: any[], clientPg: Client, configService: ConfigType<typeof config>);
    getHello(): string;
    getTasks(): Promise<unknown>;
}
