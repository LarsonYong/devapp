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
var router_1 = require("@angular/router");
var user_1 = require("./user");
var http_1 = require("@angular/http");
var alert_service_1 = require("../../services/alert.service");
var UserAdminComponent = (function () {
    function UserAdminComponent(userService, alertService, http, router) {
        var _this = this;
        this.userService = userService;
        this.alertService = alertService;
        this.http = http;
        this.router = router;
        this.UserList = [];
        this.location = '';
        this.model = new user_1.User('', '', '', '', false);
        this.UserDetails = [];
        this.UserSearchDeatails = [];
        this.submitted = false;
        this.searched = false;
        this.userService.getUserList()
            .subscribe(function (data) { return (_this.UserList = data.json()); });
        console.log("submitted: " + this.submitted);
    }
    UserAdminComponent.prototype.showuserlist = function () {
        var _this = this;
        document.getElementById('userlistbttn').classList.add('active');
        document.getElementById('adduserbttn').classList.remove('active');
        document.getElementById('searchbttn').classList.remove('active');
        document.getElementById('userlist').classList.add('active');
        document.getElementById('userlist').classList.remove('hidden');
        document.getElementById('adduser').classList.remove('active');
        document.getElementById('adduser').classList.add('hidden');
        document.getElementById('searchuser').classList.remove('active');
        document.getElementById('searchuser').classList.add('hidden');
        this.userService.getUserList().subscribe(function (data) { return (_this.UserList = data.json()); });
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
        this.submitted = false;
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
        this.searched = false;
    };
    Object.defineProperty(UserAdminComponent.prototype, "diagnostic", {
        get: function () { return JSON.stringify(this.model); },
        enumerable: true,
        configurable: true
    });
    UserAdminComponent.deleteUser = function (username) {
        var result = confirm("Are you sure to delete?");
    };
    UserAdminComponent.prototype.adduserclicked = function (username, password) {
        this.submitted = true;
        console.log("submitted: " + this.submitted);
        this.addUser(username, password);
    };
    UserAdminComponent.prototype.addUser = function (username, password) {
        this.http.post('api/user/add', {
            "username": username,
            "password": password
        }).subscribe(function (data) {
            console.log(data);
        }, function (err) {
            console.log(err);
        });
    };
    UserAdminComponent.prototype.deleteUser = function (username) {
        var _this = this;
        var result = confirm("Delete user: " + username + "?");
        this.http.post('api/user/delete', {
            "username": username
        }).subscribe(function (data) {
            console.log(data);
            _this.userService.getUserList().subscribe(function (data) { return (_this.UserList = data.json()); });
        }, function (err) {
            console.log(err);
        });
    };
    UserAdminComponent.prototype.searchuserclick = function (username) {
        var _this = this;
        console.log("Search: " + username);
        console.log('api/getUser/' + username);
        this.http.get('api/getUser/' + username)
            .subscribe(function (data) { return (_this.UserSearchDeatails = data.json()); });
        console.log(this.UserSearchDeatails);
        this.searched = true;
    };
    UserAdminComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'userAdmin',
            templateUrl: 'userAdmin.component.html',
            styleUrls: ['userAdmin.component.css'],
        }),
        __metadata("design:paramtypes", [services_1.AppServices,
            alert_service_1.AlertService,
            http_1.Http,
            router_1.Router])
    ], UserAdminComponent);
    return UserAdminComponent;
}());
exports.UserAdminComponent = UserAdminComponent;
//# sourceMappingURL=userAdmin.component.js.map