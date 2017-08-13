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
var services_1 = require("../../services/services");
var UserAdminComponent = (function () {
    function UserAdminComponent(userService) {
        var _this = this;
        this.userService = userService;
        this.UserList = [];
        this.location = '';
        this.UserDetails = [];
        this.userService.getUserList()
            .subscribe(function (data) { return (_this.UserList = data.json()); });
    }
    UserAdminComponent.prototype.showuserlist = function () {
        document.getElementById('userlistbttn').classList.add('active');
        document.getElementById('adduserbttn').classList.remove('active');
        document.getElementById('searchbttn').classList.remove('active');
        document.getElementById('userlist').classList.add('active');
        document.getElementById('userlist').classList.remove('hidden');
        document.getElementById('adduser').classList.remove('active');
        document.getElementById('adduser').classList.add('hidden');
        document.getElementById('searchuser').classList.remove('active');
        document.getElementById('searchuser').classList.add('hidden');
    };
    ;
    UserAdminComponent.prototype.showadduser = function () {
        document.getElementById('userlistbttn').classList.remove('active');
        document.getElementById('adduserbttn').classList.add('active');
        document.getElementById('searchbttn').classList.remove('active');
        document.getElementById('adduser').classList.add('active');
        document.getElementById('adduser').classList.remove('hidden');
        document.getElementById('userlist').classList.remove('active');
        document.getElementById('userlist').classList.add('hidden');
        document.getElementById('searchuser').classList.remove('active');
        document.getElementById('searchuser').classList.add('hidden');
    };
    UserAdminComponent.prototype.showsearch = function () {
        document.getElementById('userlistbttn').classList.remove('active');
        document.getElementById('adduserbttn').classList.remove('active');
        document.getElementById('searchbttn').classList.add('active');
        document.getElementById('searchuser').classList.add('active');
        document.getElementById('searchuser').classList.remove('hidden');
        document.getElementById('userlist').classList.remove('active');
        document.getElementById('userlist').classList.add('hidden');
        document.getElementById('adduser').classList.remove('active');
        document.getElementById('adduser').classList.add('hidden');
    };
    UserAdminComponent.deleteUser = function (username) {
        var result = confirm("Are you sure to delete?");
    };
    UserAdminComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'userAdmin',
            templateUrl: 'userAdmin.component.html',
            styleUrls: ['userAdmin.component.css'],
        }),
        __metadata("design:paramtypes", [services_1.AppServices])
    ], UserAdminComponent);
    return UserAdminComponent;
}());
exports.UserAdminComponent = UserAdminComponent;
//# sourceMappingURL=userAdmin.component.js.map