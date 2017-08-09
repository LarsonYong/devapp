/**
 * Created by jack on 8/8/17.
 */
import {Injectable} from '@angular/core'
import {Http, Headers } from '@angular/http'

@Injectable()
export class HttpClientService{
    constructor(private  http: Http){}

    static createHeader(headers:Headers){
        headers.append('Access-Control-Allow-Origin','*')
    }
    post(url,data){
        let headers = new Headers();
        HttpClientService.createHeader(headers);
        return this.http.post(url,data,{
            headers:headers
        });
    }
}