import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './components/app/app.component';
import { NavMenuComponent}  from './components/navmenu/navmenu.component';
import { UserAdminComponent } from "./components/userAdmin/userAdmin.component";
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
import {AuthenticationGuard} from "./services/authGuard.service"
import {CanActivate} from "@angular/router"

@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        UserAdminComponent,
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
        AlertService,
        AuthenticationGuard,
    ],
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full',canActivate:[AuthenticationGuard] },
            { path:'login', component: LoginComponent},
            { path: 'home', component: HomeComponent,canActivate:[AuthenticationGuard] },
            { path: 'details/:id', component: DetailsComponent ,canActivate:[AuthenticationGuard] },
            { path: 'userAdmin', component: UserAdminComponent,canActivate:[AuthenticationGuard]  },
            { path: 'edit/:id', component: EditComponent ,canActivate:[AuthenticationGuard] },
            { path: 'gateway', component: GatewayComponent ,canActivate:[AuthenticationGuard] },
            { path: '**', redirectTo: 'home',canActivate:[AuthenticationGuard]  },

        ])],
        // RouterModule.forRoot([
        //     {path:'',canActivate:[AuthenticationGuard],children:[
        //         {path:'home',component:HomeComponent},
        //         {path:'details/:id',component:DetailsComponent},
        //         {path:'newUser',component:NewUserComponent},
        //         {path:'edit/:id',component:EditComponent},
        //         {path:'gateway',component:GatewayComponent},
        //         {path:'**',redirectTo:'home'},
        //     ]}
        // ])],

    bootstrap: [AppComponent]
})
export class AppModule { }