"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const detais_entity_1 = require("./../../Entity/detais.entity");
const sales_entity_1 = require("../../Entity/sales.entity");
const sales_services_service_1 = require("../../services/sales-services/sales-services.service");
const sales_controller_1 = require("./sales.controller");
let SalesModule = class SalesModule {
};
SalesModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([sales_entity_1.sale, detais_entity_1.detailsEntity])],
        controllers: [sales_controller_1.SalesController],
        providers: [sales_services_service_1.SalesServicesService],
        exports: [typeorm_1.TypeOrmModule]
    })
], SalesModule);
exports.SalesModule = SalesModule;
//# sourceMappingURL=sales.module.js.map