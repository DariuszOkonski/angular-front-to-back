import { Component } from "@angular/core";

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})

export class UserComponent {
    firstName: string;
    lastName: string;
    age: number;
    address;

    constructor() {
        this.firstName = 'Dariusz';
        this.lastName = 'Okonski';
        this.age = 42;

        this.address = {
            street: '50 Main st',
            city: 'Boston',
            state: 'MA'
        }
    }

    showAge(): number {
        return this.age + 2;
    }
}