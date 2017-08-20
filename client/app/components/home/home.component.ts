/**
 * Created by jack on 8/2/17.
 */
import { Component } from '@angular/core';
import { AppServices } from "../../services/services"
import { CanActivate } from '@angular/router';
import {isloggedin} from "../../services/authentication.service";

@Component({
    moduleId: module.id,
    selector: 'home',
    templateUrl: 'home.component.html',

})



export class HomeComponent {
    public UserList = [];

    public constructor(
        private userService:AppServices,
    ){
        this.userService.getUserList()
            .subscribe(
                (data) => (this.UserList = data.json().apiData)
            );
    }
}
