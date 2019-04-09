import { Injectable } from '@angular/core';

import { User } from '../models/user';
 import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser: User;
  redirectUrl: string;

  get isLoggedIn(): boolean {
    return !!this.currentUser;
  }

  constructor(private messageService: MessageService) { }

  login(userName: string, password: string): void {
    if (!userName || !password) {
      this.messageService.addMessage('Please enter your userName and password');
      return;
    }
    var logins = JSON.parse(localStorage.getItem("users"));
    for (var key in logins) {
     if (userName==logins[key].userName){
       this.currentUser=logins[key];
       return;
     }
    }
    
    if ( this.currentUser!=null){
      this.messageService.addMessage(`User: ${this.currentUser.userName} logged in`);
    }
    
    // if (userName === 'admin') {
    //   this.currentUser = {
    //     id: 1,
    //     userName: userName,
    //     password:password,
    //     isAdmin: true
    //   };
    //   this.messageService.addMessage('Admin login');
    //   return;
    // }
    // this.currentUser = {
    //   id: 2,
    //   userName: userName,
    //   password:password,
    //   isAdmin: false
    // };
    // this.messageService.addMessage(`User: ${this.currentUser.userName} logged in`);
  }

  logout(): void {
    this.currentUser = null;
  }
}
