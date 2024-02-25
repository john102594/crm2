"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UbicationController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const ubication_service_1 = require("../services/ubication.service");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const parse_files_service_1 = require("../../files/parse-files.service");
const upload_files_service_1 = require("../../files/upload-files.service");
let UbicationController = exports.UbicationController = class UbicationController {
    constructor(ubicationService, uploadFilesService, parseFilesService) {
        this.ubicationService = ubicationService;
        this.uploadFilesService = uploadFilesService;
        this.parseFilesService = parseFilesService;
    }
    async createMany(file) {
        try {
            const csvData = await this.uploadFilesService.uploadCsv(file, true);
            const csvParse = (await this.parseFilesService.parseCsv(csvData));
            return this.ubicationService.createMany(csvParse);
        }
        catch (error) {
            return error;
        }
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file', {
        storage: (0, multer_1.diskStorage)({
            destination: './files',
        }),
    })),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UbicationController.prototype, "createMany", null);
exports.UbicationController = UbicationController = __decorate([
    (0, swagger_1.ApiTags)('ubication'),
    (0, common_1.Controller)('ubication'),
    __metadata("design:paramtypes", [ubication_service_1.UbicationService,
        upload_files_service_1.UploadFilesService,
        parse_files_service_1.ParseFilesService])
], UbicationController);
//# sourceMappingURL=ubication.controller.js.map