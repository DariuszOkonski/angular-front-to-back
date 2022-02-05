import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from './../../models/User';
import { UserService } from '../../services/user.service';

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
  @ViewChild('userForm') form: any;
  data: any;

  constructor(
    private userService: UserService
  ) { 
    this.users = [];
  }
  
  ngOnInit(): void {
    // this.userService.getData().subscribe(data => {
    //   console.log(data);
    // });

    this.userService.getUsers().subscribe(users => {
      this.users = users;
      this.loaded = true;      
    })
  }

  showAdditionalData(): void {
    this.showExtended = !this.showExtended;
  }

  onSubmit(user: NgForm) {
    const {value, valid} = user;
   
    if(!valid) {
      console.log('Form is not valid')
    } else {
      value.isActive = true;
      value.registered = new Date();
      value.hide = true;

      this.userService.addUser(value);
      
      this.form.reset();
    }
  }
}
