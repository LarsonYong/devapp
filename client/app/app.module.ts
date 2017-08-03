import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './components/app/app.component';
import {NavMenuComponent}  from './components/navmenu/navmenu.component';
import { newUserComponent } from "./components/newUser/newUser.component";
import {homeComponent}  from "./components/home/home.component";
import {editComponent} from "./components/edit/edit.component";
import {detailsComponent} from "./components/details/details.component";
import {AppServices} from "./services/services"
import {gatewayComponent } from "./components/gateway/gateway.component"
import {NavbarService} from "./services/navmenu.service"
@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        newUserComponent,
        homeComponent,
        editComponent,
        detailsComponent,
        gatewayComponent
    ],
    providers: [
        AppServices,
        NavbarService
    ],
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: homeComponent },
            { path: 'details/:id', component: detailsComponent },
            { path: 'newUser', component: newUserComponent },
            { path: 'edit/:id', component: editComponent },
            { path: 'gateway', component: gatewayComponent },
            { path: '**', redirectTo: 'home' },

        ])],
    bootstrap: [AppComponent]
})
export class AppModule { }