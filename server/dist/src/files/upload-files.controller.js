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
exports.UploadFilesController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const upload_files_service_1 = require("./upload-files.service");
const parse_files_service_1 = require("./parse-files.service");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
let UploadFilesController = exports.UploadFilesController = class UploadFilesController {
    constructor(uploadFilesService, parseFilesService) {
        this.uploadFilesService = uploadFilesService;
        this.parseFilesService = parseFilesService;
    }
    async uploadCsv(file) {
        try {
            const csvData = await this.uploadFilesService.uploadCsv(file, true);
            const csvParse = await this.parseFilesService.parseCsv(csvData);
            return csvParse;
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
], UploadFilesController.prototype, "uploadCsv", null);
exports.UploadFilesController = UploadFilesController = __decorate([
    (0, swagger_1.ApiTags)('upload-files'),
    (0, common_1.Controller)('upload-files'),
    __metadata("design:paramtypes", [upload_files_service_1.UploadFilesService,
        parse_files_service_1.ParseFilesService])
], UploadFilesController);
//# sourceMappingURL=upload-files.controller.js.map