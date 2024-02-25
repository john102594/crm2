"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilesModule = void 0;
const common_1 = require("@nestjs/common");
const upload_files_controller_1 = require("./upload-files.controller");
const upload_files_service_1 = require("./upload-files.service");
const parse_files_service_1 = require("./parse-files.service");
let FilesModule = exports.FilesModule = class FilesModule {
};
exports.FilesModule = FilesModule = __decorate([
    (0, common_1.Module)({
        imports: [],
        controllers: [upload_files_controller_1.UploadFilesController],
        providers: [upload_files_service_1.UploadFilesService, parse_files_service_1.ParseFilesService],
        exports: [upload_files_service_1.UploadFilesService, parse_files_service_1.ParseFilesService],
    })
], FilesModule);
//# sourceMappingURL=files.module.js.map