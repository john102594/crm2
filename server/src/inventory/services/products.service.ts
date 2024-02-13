import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';

import {
  CreateProductDto,
  UpdateProductDto,
  FilterProductDto,
  CreatedManyProduct,
} from '../dtos/products.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma, Product } from '@prisma/client';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}
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

  async find(params?: Prisma.ProductFindManyArgs): Promise<Product[]> {
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
