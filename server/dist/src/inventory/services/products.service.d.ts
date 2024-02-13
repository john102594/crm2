import { CreateProductDto, UpdateProductDto, CreatedManyProduct } from '../dtos/products.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma, Product } from '@prisma/client';
export declare class ProductsService {
    private prisma;
    constructor(prisma: PrismaService);
    find(params?: Prisma.ProductFindManyArgs): Promise<Product[]>;
    findOne(id: number): Promise<import("@prisma/client/runtime").GetResult<{
        id: number;
        name: string;
        sku: string;
        image: string;
        createdAt: Date;
        updateAt: Date;
        unitCostAvg: number;
        salePrice: number;
        quantity: number;
    }, unknown> & {}>;
    createMany(data: CreateProductDto[]): Promise<CreatedManyProduct[]>;
    create(data: CreateProductDto): Promise<import("@prisma/client/runtime").GetResult<{
        id: number;
        name: string;
        sku: string;
        image: string;
        createdAt: Date;
        updateAt: Date;
        unitCostAvg: number;
        salePrice: number;
        quantity: number;
    }, unknown> & {}>;
    update(id: number, changes: UpdateProductDto): Promise<import("@prisma/client/runtime").GetResult<{
        id: number;
        name: string;
        sku: string;
        image: string;
        createdAt: Date;
        updateAt: Date;
        unitCostAvg: number;
        salePrice: number;
        quantity: number;
    }, unknown> & {}>;
    remove(id: number): Promise<import("@prisma/client/runtime").GetResult<{
        id: number;
        name: string;
        sku: string;
        image: string;
        createdAt: Date;
        updateAt: Date;
        unitCostAvg: number;
        salePrice: number;
        quantity: number;
    }, unknown> & {}>;
}
