"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Connection = void 0;
const typeorm_1 = require("@nestjs/typeorm");
const sales_entity_1 = require("../Entity/sales.entity");
const detais_entity_1 = require("../Entity/detais.entity");
const user_entity_1 = require("../Entity/user.entity");
exports.Connection = typeorm_1.TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'ith-db-v2',
    entities: [user_entity_1.User, sales_entity_1.sale, detais_entity_1.detailsEntity],
    synchronize: true,
});
//# sourceMappingURL=DBConecxion.js.map