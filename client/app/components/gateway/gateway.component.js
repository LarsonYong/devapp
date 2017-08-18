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
var http_2 = require("@angular/http");
var Httpclient_service_1 = require("../../services/Httpclient.service");
var options = new http_2.RequestOptions({
    url: "http://devtest.v5systems.us",
    body: {
        "username": "v5admin",
        "password": "v5admin123"
    },
    method: http_2.RequestMethod.Post,
});
var GatewayComponent = (function () {
    function GatewayComponent(httpclinetservice, http) {
        this.httpclinetservice = httpclinetservice;
        this.http = http;
        this.ReqRsult = [];
    }
    GatewayComponent.prototype.clicklogin = function () {
        var _this = this;
        console.log("***");
        this.http.post('api/v5login', {
            "username": "v5root",
            "password": "v5admin12"
        }).map(function (res) {
            if (res.json().apiStatus.responseStatus == 'status_ok') {
                _this.message = "Success Login!";
            }
            else {
                _this.message = JSON.stringify(res.json().apiStatus.message);
            }
        }).subscribe(function (data) {
            console.log(data);
        });
    };
    GatewayComponent.prototype.clickallconnectunit = function () {
        var _this = this;
        this.http.get('api/v5allconnect').map(function (res) {
            console.log("***2");
            if (res.json()) {
                console.log(res);
                _this.message = JSON.stringify(res.json());
            }
        }).subscribe(function (data) {
            console.log(data);
        });
    };
    GatewayComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'gateway',
            templateUrl: 'gateway.component.html',
        }),
        __metadata("design:paramtypes", [Httpclient_service_1.HttpClientService,
            http_1.Http])
    ], GatewayComponent);
    return GatewayComponent;
}());
exports.GatewayComponent = GatewayComponent;
//# sourceMappingURL=gateway.component.js.map