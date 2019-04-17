
import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { User, IssueDetails } from '../models/user';
import { SocialUser, AuthService } from 'angular-6-social-login';
import { BooksService } from '../services/books.service';

@Injectable({
  providedIn: 'root'
})
export class LocalAuthService {
  currentUser: User;
  redirectUrl: string;

  get isLoggedIn(): boolean {
    return !!this.currentUser;
  }
  userType: BehaviorSubject<string> = new BehaviorSubject<string>(this.getUserType());
  constructor(private bookservice: BooksService, private socialAuthService: AuthService) { }

  login(userName: string, password: string): void {
    if (!userName || !password) {
      // add message
      return;
    }
    if (userName === 'Admin') {
      this.currentUser = {
        id: 1,
        userName,
        password,
        isAdmin: true,
        booksIssued: null,
        email: 'admin@atl.com',
        image: '/assets/admin-avatar.jpg'
      };
      localStorage.setItem('user', this.currentUser.userName);
      this.userType.next(this.currentUser.userName);
      return;
    }

    localStorage.setItem('user', this.currentUser.userName);
    this.userType.next(this.currentUser.userName);

  }
  sociallogin(socialuser: SocialUser): void {
     // var booksIssued:IssueDetails[];

     socialuser.id = this.bookservice.getNextMaxUserId().toString();
     this.currentUser = {
      id: Number(socialuser.id),
      userName: socialuser.name,
      email: socialuser.email,
      password: '***',
      isAdmin: false,
      booksIssued: [],
      image: socialuser.image
    };

     localStorage.setItem('user', this.currentUser.userName);
     this.userType.next(this.currentUser.userName);
     return;
  }
  logout(): void {
    const x = this.socialAuthService.signOut();
    x.then(() => {


    });
    this.socialAuthService.authState.subscribe().unsubscribe();

    this.currentUser = null;
    localStorage.setItem('user', null);
    this.userType.next(null);
  }
  getUserType() {
    return localStorage.getItem('user');
  }
}
