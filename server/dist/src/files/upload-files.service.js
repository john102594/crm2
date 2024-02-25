"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UploadFilesService = void 0;
const common_1 = require("@nestjs/common");
const fs_1 = require("fs");
let UploadFilesService = exports.UploadFilesService = class UploadFilesService {
    async uploadCsv(file, deleteFile) {
        try {
            const csvFile = (0, fs_1.readFileSync)(file.path);
            const csvData = csvFile.toString();
            if (deleteFile) {
                (0, fs_1.unlinkSync)(file.path);
            }
            return csvData;
        }
        catch (error) {
            return error;
        }
    }
};
exports.UploadFilesService = UploadFilesService = __decorate([
    (0, common_1.Injectable)()
], UploadFilesService);
//# sourceMappingURL=upload-files.service.js.map