/**
 * Created by jack on 8/2/17.
 */
import { Component } from '@angular/core';
import { AppServices } from "../../services/services"

@Component({
    moduleId: module.id,
    selector: 'userAdmin',
    templateUrl: 'userAdmin.component.html',
    styleUrls: ['userAdmin.component.css'],

})
export class UserAdminComponent {
    public UserList = [];
    public constructor(private userService:AppServices){
        this.userService.getUserList()
            .subscribe(
                (data) => (this.UserList = data.json())
            );
    }
    deleteUser(username){
        const result = confirm("Are you sure to delete?")

    }
}