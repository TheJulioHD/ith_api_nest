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
exports.SalesServicesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const detais_entity_1 = require("./../../Entity/detais.entity");
const sales_entity_1 = require("../../Entity/sales.entity");
const typeorm_2 = require("typeorm");
let SalesServicesService = class SalesServicesService {
    constructor(salesRepository, detailsRepository) {
        this.salesRepository = salesRepository;
        this.detailsRepository = detailsRepository;
    }
    async create(sales) {
        const date = new Date();
        const details = new detais_entity_1.detailsEntity();
        let total = 0;
        sales.details.forEach(element => {
            total = total + (element.quantity * element.unit_price);
        });
        const newSale = await this.salesRepository.save({
            id_user: sales.id_user,
            date: date,
            total,
        });
        sales.details.forEach(element => {
            details.product = element.product;
            details.quantity = element.quantity;
            details.unit_price = element.unit_price;
            details.idsale = newSale.id;
            this.detailsRepository.insert({
                idsale: details.idsale,
                product: details.product,
                quantity: details.quantity,
                unit_price: details.unit_price
            });
        });
    }
};
SalesServicesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(sales_entity_1.sale)),
    __param(1, (0, typeorm_1.InjectRepository)(detais_entity_1.detailsEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], SalesServicesService);
exports.SalesServicesService = SalesServicesService;
//# sourceMappingURL=sales-services.service.js.map