import { Module } from '@nestjs/common';
import { UploadFilesController } from './upload-files.controller';
import { UploadFilesService } from './upload-files.service';
import { ParseFilesService } from './parse-files.service';

@Module({
  imports: [],
  controllers: [UploadFilesController],
  providers: [UploadFilesService, ParseFilesService],
  exports: [UploadFilesService, ParseFilesService],
})
export class FilesModule {}
