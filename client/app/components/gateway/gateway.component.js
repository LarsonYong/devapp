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
var Httpclient_service_1 = require("../../services/Httpclient.service");
var options = new http_1.RequestOptions({
    url: "http://devtest.v5systems.us",
    body: {
        "username": "v5admin",
        "password": "v5admin123"
    },
    method: http_1.RequestMethod.Post,
});
var GatewayComponent = (function () {
    function GatewayComponent(httpclinetservice) {
        var _this = this;
        this.httpclinetservice = httpclinetservice;
        this.posturl = 'http://10.70.32.60/4480';
        this.body = {
            "username": "v5admin123",
            "password": "v5admin123"
        };
        this.ReqRsult = [];
        this.httpclinetservice.post(this.posturl, this.body)
            .subscribe(function (data) { return (_this.ReqRsult = data.json()); });
    }
    GatewayComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'gateway',
            templateUrl: 'gateway.component.html',
        }),
        __metadata("design:paramtypes", [Httpclient_service_1.HttpClientService])
    ], GatewayComponent);
    return GatewayComponent;
}());
exports.GatewayComponent = GatewayComponent;
//# sourceMappingURL=gateway.component.js.map