import { Injectable } from '@nestjs/common';
import { readFileSync, unlinkSync } from 'fs';
import { ParseFilesService } from './parse-files.service';

@Injectable()
export class UploadFilesService {
  async uploadCsv(file, deleteFile?: boolean) {
    try {
      const csvFile = readFileSync(file.path);
      const csvData = csvFile.toString();
      if (deleteFile) {
        unlinkSync(file.path);
      }
      return csvData;
    } catch (error) {
      return error;
    }
  }
}
