/**
 * Created by jack on 8/2/17.
 */
import { Component } from '@angular/core';
import { HttpModule, Headers,Http } from '@angular/http';
import { HttpClientModule} from '@angular/common/http';
import { RequestOptions, Request, RequestMethod} from '@angular/http';
import { HttpClientService} from '../../services/Httpclient.service'

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
    public posturl= 'http://10.70.32.60/4480';
    public body = {
        "username": "v5admin123",
        "password": "v5admin123"
    };
    public ReqRsult= [];
    constructor(public httpclinetservice:HttpClientService) {
        this.httpclinetservice.post(this.posturl,this.body)
            .subscribe(
                (data) =>(this.ReqRsult = data.json())
            )
    }

}