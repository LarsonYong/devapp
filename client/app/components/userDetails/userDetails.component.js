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
var DetailsComponent = (function () {
    function DetailsComponent(userService) {
        this.userService = userService;
        this.UserDetails = [];
    }
    DetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        var params = new URLSearchParams(document.location.search.substr(1));
        var name = params.get("username");
        if (name) {
            console.log("Success");
        }
        else {
            console.log("Not OK!");
        }
        this.userService.getUser(name).subscribe(function (data) { return (_this.UserDetails = data.json()); });
    };
    DetailsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'userDetails',
            templateUrl: 'userDetails.component.html',
        }),
        __metadata("design:paramtypes", [services_1.AppServices])
    ], DetailsComponent);
    return DetailsComponent;
}());
exports.DetailsComponent = DetailsComponent;
//# sourceMappingURL=userDetails.component.js.map