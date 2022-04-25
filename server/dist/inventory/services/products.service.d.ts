import { Repository } from 'typeorm';
import { Product } from '../entities/product.entity';
import { CreateProductDto, UpdateProductDto, FilterProductDto } from '../dtos/products.dto';
export declare class ProductsService {
    private productRepo;
    constructor(productRepo: Repository<Product>);
    findAll(params?: FilterProductDto): Promise<Product[]>;
    findOne(id: number): Promise<Product>;
    findSku(productSku: string): Promise<Product>;
    create(data: CreateProductDto): Promise<Product>;
    bulkCreate(data: CreateProductDto[]): Promise<Product[]>;
    update(id: number, changes: UpdateProductDto): Promise<Product>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
