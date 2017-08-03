/**
 * Created by jack on 8/2/17.
 */
import { Component } from '@angular/core';
import { AppServices } from "../../services/services"

@Component({
    moduleId: module.id,
    selector: 'home',
    templateUrl: 'home.component.html',

})
export class homeComponent {
    public UserList = [];
    public constructor(private userService:AppServices){
        this.userService.getUserList()
            .subscribe(
                (data) => (this.UserList = data.json())
            );
    }
}
