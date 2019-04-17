import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { LocalAuthService } from '../services/localauth.service';
import {
  AuthService,
  FacebookLoginProvider,
  GoogleLoginProvider,
  SocialUser, SocialLoginModule
} from 'angular-6-social-login';

@Component({
  templateUrl: './login.component.html'
})
export class LoginComponent {
  errorMessage: string;
  pageTitle = 'Sign In';

  private user: SocialUser;
  public authorized = false;

  constructor(private localauthService: LocalAuthService,
              private router: Router, private socialAuthService: AuthService
              ) { }


  login(loginForm: NgForm) {
    if (loginForm && loginForm.valid) {
       const userName = loginForm.form.value.userName;
       const password = loginForm.form.value.password;
       this.localauthService.login(userName, password);

       if (this.localauthService.redirectUrl) {
            this.router.navigateByUrl(this.localauthService.redirectUrl);
         } else {
             this.router.navigate(['/login']);
         }
        } else {
          this.errorMessage = 'Please enter a user name and password.';
         }
  }

  public socialSignIn(socialPlatform: string) {
    let socialPlatformProvider;
    if (socialPlatform === 'facebook') {
      socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    } else if (socialPlatform === 'google') {
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    }
    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        console.log(socialPlatform + ' sign in data : ' , userData);
        // Now sign-in with userData
        if (userData != null) {
               this.authorized = true;
               this.user = userData;
            }
        if (this.authorized) {
              this.localauthService.sociallogin(this.user);
              this.router.navigate(['/books']);

    }
      }
    );



  }

}


