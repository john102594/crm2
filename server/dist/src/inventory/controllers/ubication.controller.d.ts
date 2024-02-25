import { UbicationService } from '../services/ubication.service';
import { ParseFilesService } from 'src/files/parse-files.service';
import { UploadFilesService } from 'src/files/upload-files.service';
export declare class UbicationController {
    private ubicationService;
    private uploadFilesService;
    private parseFilesService;
    constructor(ubicationService: UbicationService, uploadFilesService: UploadFilesService, parseFilesService: ParseFilesService);
    createMany(file: any): Promise<any>;
}
