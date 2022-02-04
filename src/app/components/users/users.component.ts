import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from './../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user: User = {
    firstName: '',
    lastName: '',
    email: '',
  };
  users: User[];
  showExtended: boolean = true;
  loaded: boolean = false;
  enableAdd: boolean = false;
  showUserForm: boolean = false;

  constructor() { 
    this.users = [];
  }

  ngOnInit(): void {
      this.users = [
        {
          firstName: 'John',
          lastName: 'Doe',
          email: 'john@gmail.com',
          isActive: true,
          registered: new Date('01/02/2018 08:30:00'),
          hide: true,
        },
        {
          firstName: 'Kevin',
          lastName: 'Johnson',
          email: 'kevin@gmail.com',
          isActive: false,
          registered: new Date('03/11/2017 06:20:00'),
          hide: true,
        },
        {
          firstName: 'Karen',
          lastName: 'Williams',
          email: 'karen@gmail.com',
          isActive: true,
          registered: new Date('11/02/2016 10:30:00'),
          hide: true
        }
      ]
      
      this.loaded = true;
  }

  addUser(): void {
    this.user.isActive = true;
    this.user.registered = new Date();
    this.users.unshift(this.user);

    this.user = {
      firstName: '',
      lastName: '',
      email: '',
    };

    // this.showUserForm = false;
  }

  showAdditionalData(): void {
    this.showExtended = !this.showExtended;
  }

  onSubmit(userForm: NgForm) {
    // event.preventDefault();
    this.addUser();   
  }
}
