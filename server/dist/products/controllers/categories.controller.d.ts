import { CategoriesService } from '../services/categories.service';
import { CreateCategoryDto, UpdateCategoryDto } from './../dtos/category.dtos';
export declare class CategoriesController {
    private categoriesService;
    constructor(categoriesService: CategoriesService);
    findAll(): Promise<import("../entities/category.entity").Category[]>;
    get(id: number): Promise<import("../entities/category.entity").Category>;
    create(payload: CreateCategoryDto): Promise<import("../entities/category.entity").Category>;
    update(id: number, payload: UpdateCategoryDto): Promise<import("../entities/category.entity").Category>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
