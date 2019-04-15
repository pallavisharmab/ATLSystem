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


@NgModule({

  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
  //   HttpClientInMemoryWebApiModule.forRoot(
  //  BookData, { dataEncapsulation: false, delay: 1000 }),
   BrowserAnimationsModule
  
   
  ],
  declarations: [
    AlertComponent, 
    AppComponent,
    HomeComponent ,
    LoginComponent
  ],
  providers: [
    // include alert service in app module providers
    AlertService
  
],
  exports : [AlertComponent],
  bootstrap: [AppComponent]
})
export class AppModule { } 
