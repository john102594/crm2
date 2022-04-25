import { BrandsService } from '../services/brands.service';
import { CreateBrandDto, UpdateBrandDto } from '../dtos/brand.dtos';
export declare class BrandsController {
    private brandsService;
    constructor(brandsService: BrandsService);
    findAll(): Promise<import("../entities/brand.entity").Brand[]>;
    get(id: number): Promise<import("../entities/brand.entity").Brand>;
    create(payload: CreateBrandDto): Promise<import("../entities/brand.entity").Brand>;
    update(id: number, payload: UpdateBrandDto): Promise<import("../entities/brand.entity").Brand>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
