"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DetailsModule = void 0;
const detais_entity_1 = require("./../../Entity/detais.entity");
const detais_controller_1 = require("./detais.controller");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const details_service_1 = require("../../services/details/details.service");
let DetailsModule = class DetailsModule {
};
DetailsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([detais_entity_1.detailsEntity])],
        controllers: [detais_controller_1.DetaisController],
        providers: [details_service_1.DetailsService],
        exports: [typeorm_1.TypeOrmModule]
    })
], DetailsModule);
exports.DetailsModule = DetailsModule;
//# sourceMappingURL=details.module.js.map