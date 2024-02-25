import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';

import {
  CreateProductDto,
  UpdateProductDto,
  FindSkuProductDto,
  CreatedManyProduct,
} from '../dtos/products.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma, Product } from '@prisma/client';
import { UploadFilesService } from 'src/files/upload-files.service';
import { ParseFilesService } from 'src/files/parse-files.service';

@Injectable()
export class ProductsService {
  constructor(
    private prisma: PrismaService,
    private uploadFilesService: UploadFilesService,
    private parseFilesService: ParseFilesService,
  ) {}
  //create crud for product service using prisma service

  // async find(params?: FilterProductDto): Promise<Product[]> {
  //   if (Object.keys(params).length) {
  //     const products = await this.prisma.product.findMany({
  //       skip: params.skip,
  //       take: params.take,
  //       where: params.where,
  //     });
  //     return products;
  //   } else {
  //     const products = this.prisma.product.findMany({});
  //     return products;
  //   }
  // }

  async find(params?: any): Promise<Product[]> {
    return await this.prisma.product.findMany({
      skip: params.skip,
      take: params.take,
      where: params.where,
    });
  }

  async findOne(id: number) {
    const product = await this.prisma.product.findUnique({
      where: { id: +id },
    });
    if (!product) {
      throw new NotFoundException(`Product #${id} not found`);
    }
    return product;
  }

  async findOneSku(sku: string) {
    try {
      const product = await this.prisma.product.findUnique({
        where: { sku: sku },
      });
      return product;
    } catch (error) {
      return error;
    }
  }

  async createMany(data: CreateProductDto[]) {
    const products: CreatedManyProduct[] = await Promise.all(
      data.map(async (product) => {
        const findProduct = await this.prisma.product.findUnique({
          where: { sku: product.sku },
        });

        //Validate if sku exist in database
        if (findProduct !== null) {
          //If exist return message and product
          return { state: 'Sku eas exist in database', product: product };
        }
        //Else return message and create product
        const newProduct = await this.prisma.product.create({
          data: product,
        });
        return { state: 'Created Ok', product: newProduct };
      }),
    );
    return products;
  }

  async createFromCsv(file) {
    try {
      const csvData = await this.uploadFilesService.uploadCsv(file, true);

      const csvParse = (await this.parseFilesService.parseCsv(csvData)) as [
        {
          sku: string;
          quantity?: number;
          unitcostavg?: number;
          saleprice?: number;
        },
      ];
      //Parse Json to object Product[]
      const data = csvParse.map(
        ({ sku, quantity, unitcostavg, saleprice }) => ({
          sku,
          quantity: quantity | 0,
          unitCostAvg: unitcostavg | 0,
          salePrice: saleprice | 0,
        }),
      );
      return await this.prisma.product.createMany({ data });
    } catch (error) {
      return error;
    }
  }

  async create(data: CreateProductDto) {
    const product = await this.prisma.product.create({
      data,
    });
    return product;
  }

  async update(id: number, changes: UpdateProductDto) {
    const product = await this.prisma.product.update({
      where: { id: +id },
      data: changes,
    });
    return product;
  }

  async remove(id: number) {
    const product = await this.prisma.product.delete({
      where: { id: +id },
    });
    return product;
  }
}
