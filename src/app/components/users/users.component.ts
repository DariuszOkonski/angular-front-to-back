import { Component, OnInit } from '@angular/core';
import { User } from './../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];
  showExtended: boolean = true;
  loaded: boolean = false;
  enableAdd: boolean = true;

  constructor() { 
    this.users = [];
  }

  ngOnInit(): void {
    // this.showExtended = false;

    setTimeout(() => {
      this.users = [
        {
          firstName: 'John',
          lastName: 'Doe',
          age: 30,
          address: {
            street: '50 Main st',
            city: 'Boston',
            state: 'Ma'
          },
          image: 'https://picsum.photos/seed/picsum/600/600'
        },
        {
          firstName: 'Kevin',
          lastName: 'Johnson',
          age: 34,
          address: {
            street: '20 School st',
            city: 'Lynn',
            state: 'MA'
          },
          image: 'https://picsum.photos/600/600?grayscale'
        },
        {
          firstName: 'Karen',
          lastName: 'Williams',
          age: 26,
          address: {
            street: '55 Mill st',
            city: 'Miami',
            state: 'FL'
          },
          image: 'https://picsum.photos/600'
        }
      ]
      
      this.loaded = true;
    }, 2000);

    // this.addUser({
    //   firstName: 'Dariusz',
    //   lastName: 'Okonski',
    //   age: 42,
    //   address: {
    //     street: '7 Reed Way',
    //     city: 'Slough',
    //     state: 'West Berkshire'
    //   }
    // })
  }

  addUser(user: User) {
    this.users.push(user);
  }
}
