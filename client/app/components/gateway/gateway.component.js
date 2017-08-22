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
        this.loggedin60 = false;
        this.loggedin50 = false;
        this.loggedin40 = false;
        this.showalert = false;
        this.showsuccess = false;
        this.showunits60form = false;
        this.showunits50form = false;
        this.showunits40form = false;
        this.version60 = false;
        this.version50 = false;
        this.version40 = false;
        this.unitversion60 = [];
        this.unitversion50 = [];
        this.unitversion40 = [];
        this.ReqRsult = [];
        var headers = new http_1.Headers();
    }
    GatewayComponent.prototype.clicklogin60 = function () {
        var _this = this;
        this.http.post('api/v5login60', {
            "username": "v5root",
            "password": "v5admin123"
        }).map(function (res) {
            console.log(res.json());
            console.log("111", res.json().body);
            var botexdy = res.json().body;
            var bos = JSON.parse(botexdy);
            console.log(res.json().cookie[0]);
            if (bos.apiStatus.responseStatus == 'status_ok') {
                _this.showsuccess = true;
                _this.showalert = false;
                _this.loggedin60 = true;
                _this.message = "Success Login!";
                alert(_this.message);
            }
            else {
                _this.showsuccess = false;
                _this.showalert = true;
                _this.message = bos.apiStatus.responseStatus;
                alert(_this.message);
            }
            _this.cookie60 = res.json().cookie[0];
        }).subscribe(function (data) {
            console.log(data);
        });
    };
    GatewayComponent.prototype.clickallconnectunit60 = function () {
        var _this = this;
        this.http.post('api/v5allconnect60', {
            "cookie": this.cookie60
        }).map(function (res) {
            var bos = res.json().apiStatus.responseStatus;
            if (bos == "status_ok") {
                _this.allcnntdunitlist60 = res.json().apiData;
                _this.showunits60form = true;
                _this.version60 = false;
                _this.unitversion60 = [];
            }
            else {
                alert("Need to login first");
            }
            console.log(res.json().apiData);
        }).subscribe();
    };
    GatewayComponent.prototype.clicklogin50 = function () {
        var _this = this;
        this.http.post('api/v5login50', {
            "username": "v5root",
            "password": "v5admin123"
        }).map(function (res) {
            console.log(res.json());
            console.log("111", res.json().body);
            var botexdy = res.json().body;
            var bos = JSON.parse(botexdy);
            console.log(res.json().cookie[0]);
            if (bos.apiStatus.responseStatus == 'status_ok') {
                _this.showsuccess = true;
                _this.showalert = false;
                _this.loggedin50 = true;
                _this.message = "Success Login!";
                alert(_this.message);
            }
            else {
                _this.showsuccess = false;
                _this.showalert = true;
                _this.message = bos.apiStatus.responseStatus;
                alert(_this.message);
            }
            _this.cookie50 = res.json().cookie[0];
        }).subscribe(function (data) {
            console.log(data);
        });
    };
    GatewayComponent.prototype.clickallconnectunit50 = function () {
        var _this = this;
        this.http.post('api/v5allconnect50', {
            "cookie": this.cookie50
        }).map(function (res) {
            var bos = res.json().apiStatus.responseStatus;
            if (bos == "status_ok") {
                _this.allcnntdunitlist50 = res.json().apiData;
                _this.showunits50form = true;
                _this.unitversion50 = [];
            }
            else {
                alert("Need to login first");
            }
            console.log(res.json().apiData);
        }).subscribe();
    };
    GatewayComponent.prototype.clicklogin40 = function () {
        var _this = this;
        this.http.post('api/v5login40', {
            "username": "v5root",
            "password": "v5admin123"
        }).map(function (res) {
            console.log(res.json());
            console.log("111", res.json().body);
            var botexdy = res.json().body;
            var bos = JSON.parse(botexdy);
            console.log(res.json().cookie[0]);
            if (bos.apiStatus.responseStatus == 'status_ok') {
                _this.showsuccess = true;
                _this.showalert = false;
                _this.loggedin40 = true;
                _this.message = "Success Login!";
                alert(_this.message);
            }
            else {
                _this.showsuccess = false;
                _this.showalert = true;
                _this.message = bos.apiStatus.responseStatus;
                alert(_this.message);
            }
            _this.cookie40 = res.json().cookie[0];
        }).subscribe(function (data) {
            console.log(data);
        });
    };
    GatewayComponent.prototype.clickallconnectunit40 = function () {
        var _this = this;
        this.http.post('api/v5allconnect40', {
            "cookie": this.cookie40
        }).map(function (res) {
            var bos = res.json().apiStatus.responseStatus;
            if (bos == "status_ok") {
                _this.allcnntdunitlist40 = res.json().apiData;
                _this.showunits40form = true;
                _this.unitversion40 = [];
            }
            else {
                alert("Need to login first");
            }
            console.log(res.json().apiData);
        }).subscribe();
    };
    GatewayComponent.prototype.get60unitInfo = function () {
        var _this = this;
        this.version60 = true;
        this.showunits60form = false;
        for (var _i = 0, _a = this.allcnntdunitlist60; _i < _a.length; _i++) {
            var unit = _a[_i];
            if (unit.status == 1) {
                var url = 'api/v5/60/units/info/' + JSON.stringify(unit.unitId);
                this.http.post(url, {
                    "cookie": this.cookie60
                }).map(function (res) {
                    var bos = res.json().apiStatus.responseStatus;
                    if (bos == "status_ok") {
                        _this.unitversion60.push({
                            'versioninfo': res.json().apiData
                        });
                    }
                    else {
                        alert("Need to login first");
                    }
                }).subscribe();
            }
            else {
                console.log("unit not up! _____________________");
            }
        }
    };
    GatewayComponent.prototype.get50unitInfo = function () {
        var _this = this;
        this.version50 = true;
        this.showunits50form = false;
        for (var _i = 0, _a = this.allcnntdunitlist50; _i < _a.length; _i++) {
            var unit = _a[_i];
            if (unit.status == 1) {
                var url = 'api/v5/50/units/info/' + JSON.stringify(unit.unitId);
                this.http.post(url, {
                    "cookie": this.cookie50
                }).map(function (res) {
                    var bos = res.json().apiStatus.responseStatus;
                    if (bos == "status_ok") {
                        _this.unitversion50.push({
                            'versioninfo': res.json().apiData
                        });
                    }
                    else {
                        alert("Need to login first");
                    }
                }).subscribe();
            }
            else {
                console.log("unit not up! _____________________");
            }
        }
    };
    GatewayComponent.prototype.get40unitInfo = function () {
        var _this = this;
        this.version40 = true;
        this.showunits40form = false;
        for (var _i = 0, _a = this.allcnntdunitlist60; _i < _a.length; _i++) {
            var unit = _a[_i];
            if (unit.status == 1) {
                var url = 'api/v5/40/units/info/' + JSON.stringify(unit.unitId);
                this.http.post(url, {
                    "cookie": this.cookie40
                }).map(function (res) {
                    var bos = res.json().apiStatus.responseStatus;
                    if (bos == "status_ok") {
                        _this.unitversion40.push({
                            'versioninfo': res.json().apiData
                        });
                        _this.showunits40form = true;
                    }
                    else {
                        alert("Need to login first");
                    }
                }).subscribe();
            }
            else {
                console.log("unit not up! _____________________");
            }
        }
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