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
          isActive: true,
          registered: new Date('01/02/2018 08:30:00'),
          hide: true,
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
          isActive: false,
          registered: new Date('03/11/2017 06:20:00'),
          hide: true,
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
          isActive: true,
          registered: new Date('11/02/2016 10:30:00'),
          hide: true
        }
      ]
      
      this.loaded = true;
    }, 2000);
  }

  addUser() {
    const user = {
      firstName: 'Bon',
      lastName: 'Jovi',
      age: 76,
      address: {
        street: '23 Mill st',
        city: 'Cape Canaveral',
        state: 'FL'
      },
      isActive: true,
      registered: new Date('12/03/2018 10:30:00')
    }
    this.users.push(user);

  }

  showAdditionalData() {
    this.showExtended = !this.showExtended;
  }

  toggleHide(user: User) {
    console.log(user)
    user.hide = !user.hide
  }
}
