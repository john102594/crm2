import {
  Controller,
  Post,
  Type,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UbicationService } from '../services/ubication.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { ParseFilesService } from 'src/files/parse-files.service';
import { UploadFilesService } from 'src/files/upload-files.service';

@ApiTags('ubication')
@Controller('ubication')
export class UbicationController {
  constructor(
    private ubicationService: UbicationService,
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
  async createMany(@UploadedFile() file) {
    try {
      const csvData = await this.uploadFilesService.uploadCsv(file, true);
      const csvParse = (await this.parseFilesService.parseCsv(csvData)) as [
        { id: number; name: string },
      ];
      return this.ubicationService.createMany(csvParse);
    } catch (error) {
      return error;
    }
  }
}
