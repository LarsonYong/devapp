/**
 * Created by jack on 8/3/17.
 */

import {Injectable} from '@angular/core'

@Injectable()
export class NavbarService {
    visiable:boolean;

    constructor(){
        this.visiable = false;
    }
    hide(){
        this.visiable = false;
    }
    show(){
        this.visiable = true;
    }
    toggle(){
        this.visiable = !this.visiable;
    }

}