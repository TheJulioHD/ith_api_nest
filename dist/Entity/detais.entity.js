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
Object.defineProperty(exports, "__esModule", { value: true });
exports.detailsEntity = void 0;
const sales_entity_1 = require("./sales.entity");
const typeorm_1 = require("typeorm");
let detailsEntity = class detailsEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], detailsEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], detailsEntity.prototype, "product", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], detailsEntity.prototype, "quantity", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], detailsEntity.prototype, "unit_price", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => sales_entity_1.sale, (sale) => sale.details),
    (0, typeorm_1.JoinColumn)({ name: 'idsale' }),
    __metadata("design:type", Number)
], detailsEntity.prototype, "idsale", void 0);
detailsEntity = __decorate([
    (0, typeorm_1.Entity)()
], detailsEntity);
exports.detailsEntity = detailsEntity;
//# sourceMappingURL=detais.entity.js.map