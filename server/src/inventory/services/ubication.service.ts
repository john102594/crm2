import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { IsString, IsNotEmpty, IsOptional, IsNumber } from 'class-validator';

class ubicationDto {
  @IsNumber()
  @IsOptional()
  id?: number;

  @IsNotEmpty()
  @IsString()
  name?: string;
}

@Injectable()
export class UbicationService {
  constructor(private prisma: PrismaService) {}

  async createMany(data) {
    try {
      return this.prisma.ubication.createMany({ data });
    } catch (error) {
      return error;
    }
  }
}
