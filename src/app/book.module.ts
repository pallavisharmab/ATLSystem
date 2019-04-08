import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BooksComponent } from './books/books.component';
import { BookdetailComponent } from './book-detail/book-detail.component';
import { BookEditComponent } from './book-edit/book-edit.component';

import { BookResolver } from './services/book-resolver.service';
import { BookListResolver} from './bookList-resolver.service';

import { SearchPipe } from '../app/pipes/search-filter';
import { SortByPipe } from '../app/pipes/sort-by';


@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild([
        {
            path: '',
            component: BooksComponent,
            resolve: { resolvedListData: BookListResolver }
          },
          {
            path: ':id',
            component: BookdetailComponent,
            resolve: { resolvedData: BookResolver }
           
          },
          {
            path: ':id/edit',
            component: BookEditComponent,
            // data :{ },
            resolve: { resolvedData: BookResolver }
          }
    
        ])
    ],
  declarations: [
    BooksComponent,
    BookdetailComponent,
    BookEditComponent,
    SortByPipe,
    SearchPipe
  ]
})
export class BookModule { }
