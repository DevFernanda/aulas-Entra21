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
exports.Adress = void 0;
var typeorm_1 = require("typeorm");
var User_1 = require("./User");
var Adress = /** @class */ (function () {
    function Adress() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", Number)
    ], Adress.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Adress.prototype, "rua", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", Number)
    ], Adress.prototype, "numero", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Adress.prototype, "complemento", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Adress.prototype, "bairro", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Adress.prototype, "cidade", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String
        //agregação
        )
    ], Adress.prototype, "cep", void 0);
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return User_1.User; }),
        (0, typeorm_1.JoinColumn)({ name: 'user_id' }),
        __metadata("design:type", User_1.User)
    ], Adress.prototype, "users", void 0);
    Adress = __decorate([
        (0, typeorm_1.Entity)("tb_adress")
    ], Adress);
    return Adress;
}());
exports.Adress = Adress;
