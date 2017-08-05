import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './components/app/app.component';
import { NavMenuComponent}  from './components/navmenu/navmenu.component';
import { NewUserComponent } from "./components/newUser/newUser.component";
import { HomeComponent}  from "./components/home/home.component";
import { EditComponent} from "./components/edit/edit.component";
import { DetailsComponent} from "./components/details/details.component";
import { AppServices} from "./services/services"
import { GatewayComponent } from "./components/gateway/gateway.component"
import { NavbarService} from "./services/navmenu.service"
// import { LoginRouteGuard } from "./services/checklogin.service"
import { LoginService} from "./services/login.service"
import { LoginComponent} from "./components/login/login.component"
import {AuthenticationService} from "./services/authentication.service"
import {AlertService } from "./services/alert.service"
@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        NewUserComponent,
        HomeComponent,
        EditComponent,
        DetailsComponent,
        GatewayComponent,
        LoginComponent
    ],
    providers: [
        AppServices,
        NavbarService,
        LoginService,
        AuthenticationService,
        AlertService
    ],
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path:'login', component: LoginComponent},
            { path: 'home', component: HomeComponent},
            { path: 'details/:id', component: DetailsComponent },
            { path: 'newUser', component: NewUserComponent },
            { path: 'edit/:id', component: EditComponent },
            { path: 'gateway', component: GatewayComponent },
            { path: '**', redirectTo: 'home' },

        ])],
    bootstrap: [AppComponent]
})
export class AppModule { }