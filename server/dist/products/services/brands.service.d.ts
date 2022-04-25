import { Repository } from 'typeorm';
import { Brand } from './../entities/brand.entity';
import { CreateBrandDto, UpdateBrandDto } from './../dtos/brand.dtos';
export declare class BrandsService {
    private brandRepo;
    constructor(brandRepo: Repository<Brand>);
    findAll(): Promise<Brand[]>;
    findOne(id: number): Promise<Brand>;
    create(data: CreateBrandDto): Promise<Brand>;
    update(id: number, changes: UpdateBrandDto): Promise<Brand>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
