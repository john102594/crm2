import { CreatePurchaseOrderDto } from '../dtos/purchase-order.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { UploadFilesService } from 'src/files/upload-files.service';
import { ParseFilesService } from 'src/files/parse-files.service';
export declare class PurchaseOrdersService {
    private prisma;
    private uploadFilesService;
    private parseFilesService;
    constructor(prisma: PrismaService, uploadFilesService: UploadFilesService, parseFilesService: ParseFilesService);
    findAll(): Promise<({
        purchaseOrderDetails: (import("@prisma/client/runtime").GetResult<{
            id: number;
            quantity: number;
            unit_cost: number;
            createdAt: Date;
            updateAt: Date;
            productId: number;
            purchaseOrderId: number;
        }, unknown> & {})[];
    } & import("@prisma/client/runtime").GetResult<{
        id: number;
        createdAt: Date;
        updateAt: Date;
        total: number;
    }, unknown> & {})[]>;
    getResumeMonth(): Promise<any>;
    getResumeDay(): Promise<any>;
    getResumeYear(): Promise<any>;
    findOne(id: number): Promise<{
        purchaseOrderDetails: (import("@prisma/client/runtime").GetResult<{
            id: number;
            quantity: number;
            unit_cost: number;
            createdAt: Date;
            updateAt: Date;
            productId: number;
            purchaseOrderId: number;
        }, unknown> & {})[];
    } & import("@prisma/client/runtime").GetResult<{
        id: number;
        createdAt: Date;
        updateAt: Date;
        total: number;
    }, unknown> & {}>;
    createFromCsv(file: any): Promise<any>;
    create(payload: CreatePurchaseOrderDto): Promise<any>;
    update(id: number, changes: any[]): Promise<void>;
    remove(id: number): Promise<import("@prisma/client/runtime").GetResult<{
        id: number;
        quantity: number;
        unit_cost: number;
        createdAt: Date;
        updateAt: Date;
        productId: number;
        purchaseOrderId: number;
    }, unknown> & {}>;
}
