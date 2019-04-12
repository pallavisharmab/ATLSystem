import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from '../app/home/home.component';
// import { BooksComponent } from './books/books.component';
// import { BookdetailComponent } from './book-detail/book-detail.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './login/auth.guard';
import { SelectiveStrategy } from './selective-strategy.service';

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
    ], { preloadingStrategy: SelectiveStrategy })   // , { enableTracing: true, preloadingStrategy: SelectiveStrategy }
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
