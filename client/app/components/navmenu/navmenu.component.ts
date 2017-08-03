/**
 * Created by jack on 8/2/17.
 */
import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'nav-menu',
    templateUrl: 'navmenu.component.html',
    styleUrls: ['navmenu.component.css']
})
export class NavMenuComponent {
    constructor(){}
    clicked(event){
        const menu = event.target.parentElement.parentElement.parentElement;
        const test_attr = menu.attributes.class;
        const menu_width = menu.attributes['width'].value;
        console.log(test_attr);
        console.log(menu_width);
    }
}