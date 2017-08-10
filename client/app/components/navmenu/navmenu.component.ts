/**
 * Created by jack on 8/2/17.
 */
import { Component } from '@angular/core';
import { NavbarService } from '../../services/navmenu.service'
import {isloggedin,logout} from "../../services/authentication.service"
import {Router} from "@angular/router"

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
    ){}
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

