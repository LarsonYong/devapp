/**
 * Created by jack on 8/3/17.
 */
import {Component, OnInit} from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router'
import {AuthenticationService} from '../../services/authentication.service'
import {AlertService} from '../../services/alert.service'
import { NavbarService } from '../../services/navmenu.service'

@Component({
    moduleId: module.id,
    templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit{
    model: any = {};
    loading = false;
    returnUrl: string;

    constructor(
        private nav:NavbarService,
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private alertService: AlertService) {
        nav.hide()
    }

    ngOnInit() {
        // reset login status
        AuthenticationService.logout();

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    login() {
        this.loading = true;
        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(
                data => {
                    this.router.navigate([this.returnUrl]);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }
}
