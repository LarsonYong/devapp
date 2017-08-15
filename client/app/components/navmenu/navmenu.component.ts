/**
 * Created by jack on 8/2/17.
 */
import { Component } from '@angular/core';
import { NavbarService } from '../../services/navmenu.service'
import {isloggedin,logout} from "../../services/authentication.service"
import {Router} from "@angular/router"
import {Location} from "@angular/common"

@Component({
    moduleId: module.id,
    selector: 'nav-menu',
    templateUrl: 'navmenu.component.html',
    styleUrls: ['navmenu.component.css'],

})

export class NavMenuComponent {

    constructor(
        public nav: NavbarService,
        private router: Router,
        public location:Location
    ){

    }
    public isHiden(){
            let list = ["/login"],
                route = this.location.path();
            return (list.indexOf(route) > -1)
    }
    clicked(event){
        let check_result = isloggedin();
        const result = confirm("Are you sure to logout?");
        if(result && check_result === true){
            logout();
            this.router.navigate(['login'])
            }
        }
    getActived(){

    }
    }

