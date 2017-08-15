/**
 * Created by jack on 8/2/17.
 */
import { Component } from '@angular/core';
import { AppServices } from "../../services/services"
import {Router} from '@angular/router';
import {User} from './user'
import { Http, Headers, Response,RequestOptions, URLSearchParams } from '@angular/http';
import {AlertService} from '../../services/alert.service'
import {NgForm} from '@angular/forms'

@Component({
    moduleId: module.id,
    selector: 'userAdmin',
    templateUrl: 'userAdmin.component.html',
    styleUrls: ['userAdmin.component.css'],

})
export class UserAdminComponent {
    public UserList = [];
    public location = '';
    model = new User('','','','',false);
    public UserDetails = [];
    public UserSearchDeatails = [];
    public constructor(
        private userService:AppServices,
        private alertService:AlertService,
        private http: Http,
        private router: Router,
    ){
        this.userService.getUserList()
            .subscribe(
                (data) => (this.UserList = data.json())
            );
        console.log("submitted: " + this.submitted)
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
      this.userService.getUserList().subscribe((data) => (this.UserList = data.json()));

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
        this.submitted = false;
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
        this.searched = false;
    }
    submitted = false;
    searched = false;
    get diagnostic() { return JSON.stringify(this.model); }
    static deleteUser(username){
        const result = confirm("Are you sure to delete?")
    }

    adduserclicked(username,password){
        this.submitted = true;
        console.log("submitted: " + this.submitted);
        this.addUser(username,password);
    }

    addUser(username,password){
        this.http.post('api/user/add',{
            "username": username,
            "password":password
        }).subscribe(data =>{
                console.log(data)
            },err=>{
            console.log(err)
        })
    }

    deleteUser(username){
        const result = confirm("Delete user: "+ username +"?");
        this.http.post('api/user/delete',{
            "username":username
        }).subscribe(data=>{
            console.log(data);
            this.userService.getUserList().subscribe((data) => (
                this.UserList = data.json())
            );
        },err =>{
            console.log(err)
        });
    }

    searchuserclick(username){
        console.log("Search: " + username);
        console.log('api/getUser/' + username);
        this.http.get('api/getUser/' + username)
            .subscribe((data) => (this.UserSearchDeatails = data.json()));
        console.log(this.UserSearchDeatails);
        this.searched = true

    }
}