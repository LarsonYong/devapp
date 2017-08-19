/**
 * Created by jack on 8/2/17.
 */
import { Component } from '@angular/core';
import { HttpModule, Headers,Http, Response } from '@angular/http';
import { HttpClientModule} from '@angular/common/http';
import { RequestOptions, Request, RequestMethod} from '@angular/http';
import { HttpClientService} from '../../services/Httpclient.service';
import { Cookie } from 'ng2-cookies/ng2-cookies';


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
    public allcnntdunitlist : any;
    showalert= false;
    showsuccess = false;
    showunits60form = false;
    showunits50form = false;
    showunits40form = false;
    message:string;
    cookie60:string;
    cookie50:string;
    cookie40:string;
    public ReqRsult= [];
    constructor(
        public httpclinetservice:HttpClientService,
        private  http :Http,
    ) {
        let headers = new Headers();
    }

    clicklogin60(){
        this.http.post('api/v5login60', {
                "username":"v5root",
                "password":"v5admin123"
            }).map(res =>{
                console.log(res.json());
                console.log("111",res.json().body);
                const botexdy = res.json().body;
                const bos = JSON.parse(botexdy);

                console.log(res.json().cookie[0]);
                if (bos.apiStatus.responseStatus == 'status_ok'){
                    this.showsuccess = true;
                    this.showalert = false;
                    this.message = "Success Login!";
                    alert(this.message)
                }else{
                    this.showsuccess = false;
                    this.showalert = true;
                    this.message = bos.apiStatus.responseStatus;
                    alert(this.message)
                }
                this.cookie60 = res.json().cookie[0];
        }).subscribe(data=>{
            console.log(data);
        })
    }

    clickallconnectunit60(){
        this.http.post('api/v5allconnect60',{
            "cookie":this.cookie60
        }).map(res =>{
            const bos = res.json().apiStatus.responseStatus;
            if(bos == "status_ok"){
                this.allcnntdunitlist = res.json().apiData;
                this.showunits60form = true
            }else{
                alert("Need to login first")
            }
            console.log(res.json().apiData);
        }).subscribe();
    }
    clicklogin50(){
        this.http.post('api/v5login50', {
            "username":"v5root",
            "password":"v5admin123"
        }).map(res =>{
            console.log(res.json());
            console.log("111",res.json().body);
            const botexdy = res.json().body;
            const bos = JSON.parse(botexdy);

            console.log(res.json().cookie[0]);
            if (bos.apiStatus.responseStatus == 'status_ok'){
                this.showsuccess = true;
                this.showalert = false;
                this.message = "Success Login!";
                alert(this.message)
            }else{
                this.showsuccess = false;
                this.showalert = true;
                this.message = bos.apiStatus.responseStatus;
                alert(this.message)
            }
            this.cookie50 = res.json().cookie[0];
        }).subscribe(data=>{
            console.log(data);
        })
    }

    clickallconnectunit50(){
        this.http.post('api/v5allconnect50',{
            "cookie":this.cookie50
        }).map(res =>{
            const bos = res.json().apiStatus.responseStatus;
            if(bos == "status_ok"){
                this.allcnntdunitlist = res.json().apiData;
                this.showunits50form = true
            }else{
                alert("Need to login first")
            }
            console.log(res.json().apiData);
        }).subscribe();
    }
    clicklogin40(){
        this.http.post('api/v5login40', {
            "username":"v5root",
            "password":"v5admin123"
        }).map(res =>{
            console.log(res.json());
            console.log("111",res.json().body);
            const botexdy = res.json().body;
            const bos = JSON.parse(botexdy);

            console.log(res.json().cookie[0]);
            if (bos.apiStatus.responseStatus == 'status_ok'){
                this.showsuccess = true;
                this.showalert = false;
                this.message = "Success Login!";
                alert(this.message)
            }else{
                this.showsuccess = false;
                this.showalert = true;
                this.message = bos.apiStatus.responseStatus;
                alert(this.message)
            }
            this.cookie40 = res.json().cookie[0];
        }).subscribe(data=>{
            console.log(data);
        })
    }

    clickallconnectunit40(){
        this.http.post('api/v5allconnect40',{
            "cookie":this.cookie40
        }).map(res =>{
            const bos = res.json().apiStatus.responseStatus;
            if(bos == "status_ok"){
                this.allcnntdunitlist = res.json().apiData;
                this.showunits40form = true
            }else{
                alert("Need to login first")
            }
            console.log(res.json().apiData);
        }).subscribe();
    }
}