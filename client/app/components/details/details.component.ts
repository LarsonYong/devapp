/**
 * Created by jack on 8/2/17.
 */
import { Component } from '@angular/core';
import { AppServices } from "../../services/services"

@Component({
    moduleId: module.id,
    selector: 'details',
    templateUrl: 'details.component.html',

})
export class DetailsComponent {
    public UserDetails = [];
    public constructor(private userService:AppServices){
        this.userService.getUser(localStorage.getItem("UserDetails"))
            .subscribe(
                (data) => (this.UserDetails = data.json())
            );
    }
}