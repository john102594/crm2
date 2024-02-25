import { PrismaService } from 'src/prisma/prisma.service';
export declare class UbicationService {
    private prisma;
    constructor(prisma: PrismaService);
    createMany(data: any): Promise<any>;
}
