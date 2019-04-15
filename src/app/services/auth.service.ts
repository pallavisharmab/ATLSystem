
    
import { Injectable } from '@angular/core';

import { User } from '../models/user';
 
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser: User;
  redirectUrl: string;

  get isLoggedIn(): boolean {
    return !!this.currentUser;
  }

  constructor() { }

  login(userName: string, password: string): void {
    if (!userName || !password) {
      //add message
      return;
    }
    // var logins = JSON.parse(localStorage.getItem("users"));
    // for (var key in logins) {
    //  if (userName==logins[key].userName){
    //    this.currentUser=logins[key];
    //    return;
    //  }
    // }
    
    // if ( this.currentUser!=null){
    //   this.messageService.addMessage(`User: ${this.currentUser.userName} logged in`);
    // }
    
    if (userName === 'admin') {
      this.currentUser = {
        id: 1,
        userName: userName,
        password:password,
        isAdmin: true,
        booksIssued:null
      };
      
      return;
    }
    this.currentUser = {
      id: 2,
      userName: userName,
      password:password,
      isAdmin: false,
      booksIssued: [ {'bookId':101,'IssuedDate':'2019/03/30 10:14:23','RenewedDate':null }]
    };
    
  }

  logout(): void {
    this.currentUser = null;
  }
}
