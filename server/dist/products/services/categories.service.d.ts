import { Repository } from 'typeorm';
import { Category } from '../entities/category.entity';
import { CreateCategoryDto, UpdateCategoryDto } from '../dtos/category.dtos';
export declare class CategoriesService {
    private categoryRepo;
    constructor(categoryRepo: Repository<Category>);
    findAll(): Promise<Category[]>;
    findOne(id: number): Promise<Category>;
    create(data: CreateCategoryDto): Promise<Category>;
    update(id: number, changes: UpdateCategoryDto): Promise<Category>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
