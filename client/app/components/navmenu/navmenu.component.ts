/**
 * Created by jack on 8/2/17.
 */
import { Component } from '@angular/core';
import { Directive,Input,Output,ElementRef,Renderer} from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
    moduleId: module.id,
    selector: 'nav-menu',
    templateUrl: 'navmenu.component.html',
    styleUrls: ['navmenu.component.css'],
    // animations:[
    //     trigger('navstate',[
    //         state('inactive',style({
    //             width: '10%'
    //         })),
    //         state('active',style({
    //             width: '20%'
    //         })),
    //         transition('inactive => active',animate('100ms ')),
    //         transition('active => inactive',animate('100ms '))
    //     ])
    // ]
})

export class NavMenuComponent {
    constructor(){}
    clicked(event){
        const mm = document.getElementById('menu-bar');
        const nm_width = document.getElementById('menu-bar');
        mm.style.width = '10%';
    }
}