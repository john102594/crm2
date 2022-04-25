import { Product } from './product.entity';
export declare class Brand {
    id: number;
    name: string;
    image: string;
    createdAt: Date;
    updateAt: Date;
    products: Product[];
}
