import { Injectable } from '@nestjs/common';
import { diskStorage } from 'multer';
import { parse } from 'papaparse';
import { readFileSync, unlinkSync } from 'fs';

const parseConfig = {
  header: true,
  skipEmtyLines: true,
  transformHeader: (header) => header.toLowerCase().replace('#', '').trim(),
  complete: (results) => results.data,
  dynamicTyping: true,
};

@Injectable()
export class ParseFilesService {
  async parseCsv(csvString: string) {
    const parsedCsv = await parse(csvString, parseConfig);
    return parsedCsv.data;
  }
}
