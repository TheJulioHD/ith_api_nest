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
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const user_service_service_1 = require("../../services/user-service/user-service.service");
let UserController = class UserController {
    constructor(usersarvice) {
        this.usersarvice = usersarvice;
    }
    create(params) {
        if (this.usersarvice.userExists(Number(params.id))) {
            return "El usuario ya existe";
        }
        try {
            this.usersarvice.create(params);
            return true;
        }
        catch (error) {
            console.log({ error });
        }
    }
    getUsers() {
        return this.usersarvice.getall();
    }
    getUser(param) {
        const user = this.usersarvice.getByEmail(param);
        return user !== null && user !== void 0 ? user : "el usuario no existe";
    }
    actualizartUsuario(user, id) {
        return this.usersarvice.updateUserById(Number(id), user);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], UserController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('/all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], UserController.prototype, "getUsers", null);
__decorate([
    (0, common_1.Get)('/:email'),
    __param(0, (0, common_1.Param)('email')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], UserController.prototype, "getUser", null);
__decorate([
    (0, common_1.Put)('/update/:id'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "actualizartUsuario", null);
UserController = __decorate([
    (0, common_1.Controller)('user'),
    __metadata("design:paramtypes", [user_service_service_1.UserServiceService])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map