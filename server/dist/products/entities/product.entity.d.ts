import { Brand } from './brand.entity';
import { Category } from './category.entity';
export declare class Product {
    id: number;
    name: string;
    description: string;
    price: number;
    stock: number;
    image: string;
    createdAt: Date;
    updateAt: Date;
    brand: Brand;
    categories: Category[];
}
