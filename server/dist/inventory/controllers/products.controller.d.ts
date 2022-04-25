import { CreateProductDto, UpdateProductDto, FilterProductDto } from '../dtos/products.dto';
import { ProductsService } from '../services/products.service';
export declare class ProductsController {
    private productsService;
    constructor(productsService: ProductsService);
    getProducts(params: FilterProductDto): Promise<import("../entities/product.entity").Product[]>;
    getOne(productId: number): Promise<import("../entities/product.entity").Product>;
    getOneSku(productSku: string): Promise<import("../entities/product.entity").Product>;
    create(payload: CreateProductDto): Promise<import("../entities/product.entity").Product>;
    bulkCreate(payload: CreateProductDto[]): Promise<import("../entities/product.entity").Product[]>;
    update(id: number, payload: UpdateProductDto): Promise<import("../entities/product.entity").Product>;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
}
