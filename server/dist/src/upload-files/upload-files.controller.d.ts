import { UploadFilesService } from './upload-files.service';
import { ParseFilesService } from './parse-files.service';
export declare class UploadFilesController {
    private uploadFilesService;
    private parseFilesService;
    constructor(uploadFilesService: UploadFilesService, parseFilesService: ParseFilesService);
    uploadCsv(file: any): Promise<any>;
}
