import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
//import {BookData } from './data/books-mock';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AlertComponent } from './alert/alert.component';
import { AlertService } from './services/alert.service';
import { IssuedbooksComponent } from './issuedbooks/issuedbooks.component';
import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider,
  FacebookLoginProvider,
} from "angular-6-social-login";

// Configs 
export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
      [
        {
          id: FacebookLoginProvider.PROVIDER_ID,
          provider: new FacebookLoginProvider("2160581650725225")
        },
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider("799334031508-fr9entnde0ua9jvk12b6nvg2lg6vvump.apps.googleusercontent.com")
        }
      ]
  );
  return config;
}
 
@NgModule({

  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    SocialLoginModule,
  //   HttpClientInMemoryWebApiModule.forRoot(
  //  BookData, { dataEncapsulation: false, delay: 1000 }),
   BrowserAnimationsModule
  
   
  ],
  declarations: [
    AlertComponent, 
    AppComponent,
    HomeComponent ,
    IssuedbooksComponent,
    LoginComponent
  ],
  providers: [
    // include alert service in app module providers
    AlertService,
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    }
  
],
  exports : [AlertComponent],
  bootstrap: [AppComponent]
})
export class AppModule { } 
