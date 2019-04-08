import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

   
import { LoginComponent } from './login/login.component';



@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'login', component: LoginComponent }
    ])
  ],
  declarations: [
    LoginComponent
  ]
})
export class UserModule { }
