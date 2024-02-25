import {
  Controller,
  Post,
  Body,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UploadFilesService } from './upload-files.service';
import { ParseFilesService } from './parse-files.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

@ApiTags('upload-files')
@Controller('upload-files')
export class UploadFilesController {
  constructor(
    private uploadFilesService: UploadFilesService,
    private parseFilesService: ParseFilesService,
  ) {}

  @Post()
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './files',
      }),
    }),
  )
  async uploadCsv(@UploadedFile() file) {
    try {
      const csvData = await this.uploadFilesService.uploadCsv(file, true);
      const csvParse = await this.parseFilesService.parseCsv(csvData);
      return csvParse;
    } catch (error) {
      return error;
    }
  }
}
