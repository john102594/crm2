import { UpdateSaleOrderItemDto } from '../dtos/sale-order-detail.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateSaleOrderDto } from '../dtos/sale-order.dto';
import { UploadFilesService } from 'src/files/upload-files.service';
import { ParseFilesService } from 'src/files/parse-files.service';
export declare class SaleOrdersService {
    private prisma;
    private uploadFilesService;
    private parseFilesService;
    constructor(prisma: PrismaService, uploadFilesService: UploadFilesService, parseFilesService: ParseFilesService);
    findAll(): Promise<({
        saleOrderDetails: (import("@prisma/client/runtime").GetResult<{
            id: number;
            quantity: number;
            unit_price: number;
            createdAt: Date;
            updateAt: Date;
            productId: number;
            saleOrderId: number;
        }, unknown> & {})[];
    } & import("@prisma/client/runtime").GetResult<{
        id: number;
        createdAt: Date;
        updateAt: Date;
    }, unknown> & {})[]>;
    findOne(id: number): Promise<{
        saleOrderDetails: (import("@prisma/client/runtime").GetResult<{
            id: number;
            quantity: number;
            unit_price: number;
            createdAt: Date;
            updateAt: Date;
            productId: number;
            saleOrderId: number;
        }, unknown> & {})[];
    } & import("@prisma/client/runtime").GetResult<{
        id: number;
        createdAt: Date;
        updateAt: Date;
    }, unknown> & {}>;
    createFromCsv(file: any): Promise<any>;
    create(payload: CreateSaleOrderDto): Promise<any>;
    update(id: number, changes: UpdateSaleOrderItemDto[]): Promise<void>;
    remove(id: number): Promise<import("@prisma/client/runtime").GetResult<{
        id: number;
        createdAt: Date;
        updateAt: Date;
    }, unknown> & {}>;
}
