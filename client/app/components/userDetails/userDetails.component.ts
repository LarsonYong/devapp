/**
 * Created by jack on 8/2/17.
 */
import { Component,OnInit } from '@angular/core';
import { AppServices } from "../../services/services"

@Component({
    moduleId: module.id,
    selector: 'userDetails',
    templateUrl: 'userDetails.component.html',

})
export class DetailsComponent implements OnInit{
    public UserDetails = [];
    constructor(
        private userService:AppServices,
    ) {}
    ngOnInit(){
        let params = new URLSearchParams(document.location.search.substr(1));
        let name = params.get("username");
        if (name){
            console.log("Success");
        }else{
            console.log("Not OK!");
        }
        this.userService.getUser(name).subscribe(
            (data) => (this.UserDetails = data.json())
        );

    }


}