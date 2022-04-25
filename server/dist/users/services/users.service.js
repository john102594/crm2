"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("../entities/user.entity");
const customers_service_1 = require("./customers.service");
let UsersService = class UsersService {
    constructor(userRepo, customersService) {
        this.userRepo = userRepo;
        this.customersService = customersService;
    }
    async findAll() {
        return await this.userRepo.find({
            relations: ['customer'],
        });
    }
    async findOne(id) {
        const user = await this.userRepo.findOne(id);
        if (!user) {
            throw new common_1.NotFoundException(`User #${id} not found`);
        }
        return user;
    }
    async create(data) {
        const newUser = this.userRepo.create(data);
        if (data.customerId) {
            const customer = await this.customersService.findOne(data.customerId);
            newUser.customer = customer;
        }
        return await this.userRepo.save(newUser);
    }
    async update(id, changes) {
        const user = await this.userRepo.findOne(id);
        this.userRepo.merge(user, changes);
        return await this.userRepo.save(user);
    }
    async remove(id) {
        return await this.userRepo.delete(id);
    }
};
UsersService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        customers_service_1.CustomersService])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map