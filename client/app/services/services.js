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
/**
 * Created by jack on 8/2/17.
 */
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var AppServices = (function () {
    function AppServices(http) {
        this.http = http;
    }
    AppServices.prototype.getUserList = function () {
        return this.http.get('http://localhost:4500/api/getUserlist');
    };
    AppServices.prototype.getUser = function (username) {
        var reqbody = 'http://localhost:4500/api/getUser/' + username;
        console.log(reqbody);
        var User = this.http.get('http://localhost:4500/api/getUser/' + username);
        localStorage.setItem('UserDetails', JSON.stringify(User));
        return User;
    };
    AppServices = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], AppServices);
    return AppServices;
}());
exports.AppServices = AppServices;
//# sourceMappingURL=services.js.map