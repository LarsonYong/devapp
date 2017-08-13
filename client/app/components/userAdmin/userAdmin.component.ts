/**
 * Created by jack on 8/2/17.
 */
import { Component } from '@angular/core';
import { AppServices } from "../../services/services"
import {Router} from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'userAdmin',
    templateUrl: 'userAdmin.component.html',
    styleUrls: ['userAdmin.component.css'],

})
export class UserAdminComponent {
    public UserList = [];
    public location = '';
    public UserDetails = [];
    public constructor(
        private userService:AppServices,

    ){
        this.userService.getUserList()
            .subscribe(
                (data) => (this.UserList = data.json())
            );
    }
    showuserlist(){
      document.getElementById('userlistbttn').classList.add('active');
      document.getElementById('adduserbttn').classList.remove('active');
      document.getElementById('searchbttn').classList.remove('active');
      document.getElementById('userlist').classList.add('active');
      document.getElementById('userlist').classList.remove('hidden');
      document.getElementById('adduser').classList.remove('active');
      document.getElementById('adduser').classList.add('hidden');
      document.getElementById('searchuser').classList.remove('active');
      document.getElementById('searchuser').classList.add('hidden');

    };
    showadduser(){
        document.getElementById('userlistbttn').classList.remove('active');
        document.getElementById('adduserbttn').classList.add('active');
        document.getElementById('searchbttn').classList.remove('active');
        document.getElementById('adduser').classList.add('active');
        document.getElementById('adduser').classList.remove('hidden');
        document.getElementById('userlist').classList.remove('active');
        document.getElementById('userlist').classList.add('hidden');
        document.getElementById('searchuser').classList.remove('active');
        document.getElementById('searchuser').classList.add('hidden');
    }
    showsearch(){
        document.getElementById('userlistbttn').classList.remove('active');
        document.getElementById('adduserbttn').classList.remove('active');
        document.getElementById('searchbttn').classList.add('active');
        document.getElementById('searchuser').classList.add('active');
        document.getElementById('searchuser').classList.remove('hidden');
        document.getElementById('userlist').classList.remove('active');
        document.getElementById('userlist').classList.add('hidden');
        document.getElementById('adduser').classList.remove('active');
        document.getElementById('adduser').classList.add('hidden');
    }

    static deleteUser(username){
        const result = confirm("Are you sure to delete?")
    }
}