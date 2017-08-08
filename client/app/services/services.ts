/**
 * Created by jack on 8/2/17.
 */
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions,Response } from '@angular/http';
import { Observable } from "rxjs/Rx";

@Injectable()
export class AppServices {
    constructor(private http:Http){

    }
    getUserList(){
        return this.http.get('http://localhost:4500/api/getUserlist');
    }
    getUser(username){
        const reqbody = 'http://localhost:4500/api/getUser/'+username;
        console.log(reqbody);
        const User =  this.http.get('http://localhost:4500/api/getUser/'+username);
        localStorage.setItem('UserDetails', JSON.stringify(User));
        return User
    }
}
