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
var navmenu_service_1 = require("../../services/navmenu.service");
var authentication_service_1 = require("../../services/authentication.service");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var NavMenuComponent = (function () {
    function NavMenuComponent(nav, router, location) {
        this.nav = nav;
        this.router = router;
        this.location = location;
    }
    NavMenuComponent.prototype.isHiden = function () {
        var list = ["/login"], route = this.location.path();
        return (list.indexOf(route) > -1);
    };
    NavMenuComponent.prototype.clicked = function (event) {
        var check_result = authentication_service_1.isloggedin();
        var result = confirm("Are you sure to logout?");
        if (result && check_result === true) {
            authentication_service_1.logout();
            this.router.navigate(['login']);
        }
    };
    NavMenuComponent.prototype.getActived = function () {
    };
    NavMenuComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'nav-menu',
            templateUrl: 'navmenu.component.html',
            styleUrls: ['navmenu.component.css'],
        }),
        __metadata("design:paramtypes", [navmenu_service_1.NavbarService,
            router_1.Router,
            common_1.Location])
    ], NavMenuComponent);
    return NavMenuComponent;
}());
exports.NavMenuComponent = NavMenuComponent;
//# sourceMappingURL=navmenu.component.js.map