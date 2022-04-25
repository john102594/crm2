"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
exports.default = config_1.registerAs('config', () => {
    return {
        database: {
            name: process.env.DATABASE_NAME,
            host: process.env.DATABASE_HOST,
            port: parseInt(process.env.DATABASE_PORT, 10),
            user: process.env.DATABASE_USER,
            password: process.env.DATABASE_PASSWORD,
        },
        apiKey: process.env.API_KEY,
    };
});
//# sourceMappingURL=config.js.map