import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { UsersComponent } from '../components/users/users.component'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  selectedUser: User;
  users: User[];
  readonly URL_API = 'http://localhost:3000/api/';

  constructor(private http: HttpClient) { 
    this.selectedUser = new User('','','','','');
  }

  getUsers(){
    return this.http.get(this.URL_API + 'users');
  }

  postUser(User: User){
    return this.http.post(this.URL_API + 'users', User);
  }

  putUser(User: User){
    return this.http.put(this.URL_API + `users/${User._id}`, User);
  }

  deleteUser(_id: String){
    return this.http.delete(this.URL_API + `users/${_id}`);
  }
}