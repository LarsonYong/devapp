/**
 * Created by jack on 8/2/17.
 */
import { Component } from '@angular/core';
import { HttpModule, Headers,Http, Response } from '@angular/http';
import { HttpClientModule} from '@angular/common/http';
import { RequestOptions, Request, RequestMethod} from '@angular/http';
import { HttpClientService} from '../../services/Httpclient.service';

const options = new RequestOptions({
    url:"http://devtest.v5systems.us",
    body:{
        "username" : "v5admin",
        "password" : "v5admin123"
    },
    method: RequestMethod.Post,
    });

@Component({
    moduleId: module.id,
    selector: 'gateway',
    templateUrl: 'gateway.component.html',
})

export class GatewayComponent {
    message:string;
    public ReqRsult= [];
    constructor(
        public httpclinetservice:HttpClientService,
        private  http :Http
    ) {
    }
    clicklogin(){
        console.log("***");
        this.http.post('api/v5login', {
                "username":"v5root",
                "password":"v5admin12"
            }).map(res =>{
                if (res.json().apiStatus.responseStatus == 'status_ok'){
                    this.message = "Success Login!";
                }else{
                    this.message = JSON.stringify(res.json().apiStatus.message)
                }
        }).subscribe(data=>{
            console.log(data);
        })
    }

    clickallconnectunit(){
        this.http.get('api/v5allconnect').map(res =>{
            console.log("***2");
            if (res.json()){
                console.log(res);
                this.message = JSON.stringify(res.json());
            }
        }).subscribe(data=>{
            console.log(data);
        })
    }
}