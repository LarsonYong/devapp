/**
 * Created by jack on 8/2/17.
 */
import { Component } from '@angular/core';
import { NavbarService } from '../../services/navmenu.service'

@Component({
    moduleId: module.id,
    selector: 'nav-menu',
    templateUrl: 'navmenu.component.html',
    styleUrls: ['navmenu.component.css'],

})

export class NavMenuComponent {
    constructor(public nav: NavbarService){}
    clicked(event){
        const mm = document.getElementById('menu-bar');
        const nm_width = document.getElementById('menu-bar');
        mm.style.width = '10%';
    }
}