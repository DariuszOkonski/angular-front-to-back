import { Component } from "@angular/core";

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})

export class UserComponent {
    firstName: string = 'John';
    lastName: string = 'Smith';
    age: number = 42;
    address = {
        street: '50 Main st',
        city: 'Boston',
        state: 'MA'
    }

    constructor() {
    }

    showAge(): number {
        return this.age + 2;
    }
}