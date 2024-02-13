"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
exports.default = (0, config_1.registerAs)('config', () => {
    return {
        apiKey: process.env.API_KEY,
    };
});
//# sourceMappingURL=config.js.map