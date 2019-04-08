import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from '../app/home/home.component';
// import { BooksComponent } from './books/books.component';
// import { BookdetailComponent } from './book-detail/book-detail.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './login/auth.guard';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      {
        path: 'books',
        canActivate: [AuthGuard],
        data: { preload: false },
        loadChildren: './book.module#BookModule'
        },
        { path: 'login', component: LoginComponent },
      
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: '**', component: HomeComponent }
    ])   // , { enableTracing: true, preloadingStrategy: SelectiveStrategy }
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
