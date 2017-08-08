/**
 * Created by jack on 8/2/17.
 */
import { Component } from '@angular/core';
import { HttpModule } from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

@Component({
    moduleId: module.id,
    selector: 'gateway',
    templateUrl: 'gateway.component.html',

})
export class GatewayComponent {
    private resStatus = [];
    constructor(private  http: HttpClient) {

    }

    ngOnInit():void {
        const body = {username: 'v5admin',password:'v5admin123'};
        this.http.post('/api/v5login',body).subscribe(
            (data) => (this.resStatus = data.json())
        )
    }

    public login(event){

    }
}