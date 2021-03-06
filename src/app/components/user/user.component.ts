import { Component, OnInit } from "@angular/core";
import { User } from './../../models/User';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {
    user: User;

    constructor() {
        this.user = {
            firstName: 'John',
            lastName: 'Doe',
            email: 'johndoe@gmail.com'
        }        
    }    

    ngOnInit(): void {
        console.log('on init in User...');
    }
}