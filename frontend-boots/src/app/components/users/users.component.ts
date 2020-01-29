import { Component, OnInit } from '@angular/core';

import { UserService } from '../../services/user.service';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  providers:[UserService]
})
export class UsersComponent implements OnInit {

  public successNotification: Boolean 

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUsers();
  }

  addUser(form: NgForm){
    this.userService.postUser(form.value)
    .subscribe(res =>{
      console.log(res);
      this.resetForm(form);
      this.successNotification = true;
    });
  }

  getUsers(){
    this.userService.getUsers()
    .subscribe(res => {
      this.userService.users = res as User[];
      console.log(res);
    })
  }


  resetForm(form?: NgForm){
    if(form){
      form.reset();
      this.userService.selectedUser = new User("","","","","");
    }
  }
}
