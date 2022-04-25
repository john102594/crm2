import { Repository } from 'typeorm';
import { Product } from './../entities/product.entity';
import { Category } from './../entities/category.entity';
import { Brand } from './../entities/brand.entity';
import { CreateProductDto, UpdateProductDto, FilterProductDto } from './../dtos/products.dtos';
export declare class ProductsService {
    private productRepo;
    private categoryRepo;
    private brandRepo;
    constructor(productRepo: Repository<Product>, categoryRepo: Repository<Category>, brandRepo: Repository<Brand>);
    findAll(params?: FilterProductDto): Promise<Product[]>;
    findOne(id: number): Promise<Product>;
    create(data: CreateProductDto): Promise<Product>;
    update(id: number, changes: UpdateProductDto): Promise<Product>;
    removeCategoryByProduct(productId: number, categoryId: number): Promise<Product>;
    addCategoryToProduct(productId: number, categoryId: number): Promise<Product>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
