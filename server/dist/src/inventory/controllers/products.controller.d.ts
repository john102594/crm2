import { CreateProductDto, UpdateProductDto } from '../dtos/products.dto';
import { ProductsService } from '../services/products.service';
import { Prisma } from '@prisma/client';
export declare class ProductsController {
    private productsService;
    constructor(productsService: ProductsService);
    getProducts(params: Prisma.ProductFindManyArgs): Promise<(import("@prisma/client/runtime").GetResult<{
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
    }, unknown> & {})[]>;
    getOneSku(sku: string): Promise<any>;
    getOne(productId: number): Promise<import("@prisma/client/runtime").GetResult<{
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
    create(payload: CreateProductDto): Promise<import("@prisma/client/runtime").GetResult<{
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
    fromCsvCreate(file: any): any;
    bulkCreate(payload: CreateProductDto[]): Promise<import("../dtos/products.dto").CreatedManyProduct[]>;
    update(id: number, payload: UpdateProductDto): Promise<import("@prisma/client/runtime").GetResult<{
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
    delete(id: number): Promise<import("@prisma/client/runtime").GetResult<{
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
