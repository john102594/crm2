import { CreateProductDto, UpdateProductDto, CreatedManyProduct } from '../dtos/products.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Product } from '@prisma/client';
import { UploadFilesService } from 'src/files/upload-files.service';
import { ParseFilesService } from 'src/files/parse-files.service';
export declare class ProductsService {
    private prisma;
    private uploadFilesService;
    private parseFilesService;
    constructor(prisma: PrismaService, uploadFilesService: UploadFilesService, parseFilesService: ParseFilesService);
    find(params?: any): Promise<Product[]>;
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
        ubicationId: number;
    }, unknown> & {}>;
    findOneSku(sku: string): Promise<any>;
    createMany(data: CreateProductDto[]): Promise<CreatedManyProduct[]>;
    createFromCsv(file: any): Promise<any>;
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
        ubicationId: number;
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
        ubicationId: number;
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
        ubicationId: number;
    }, unknown> & {}>;
}
