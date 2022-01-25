import { Component } from "@angular/core";

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})

export class UserComponent {
    firstName: string = 'John';
    lastName: string = 'Doe';
    age: number = 30;

    constructor() {
        console.log(this.age);
        this.hasBirthday();
        console.log(this.age);
    }

    sayHello() {
        console.log(`Hello: ${this.firstName} ${this.lastName}`);
    }

    hasBirthday() {
        this.age++;
    }
}