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
    }, unknown> & {})[]>;
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
    }, unknown> & {}>;
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
    }, unknown> & {}>;
}
