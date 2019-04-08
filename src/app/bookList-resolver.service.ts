import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import {  BookListResolved } from './models/books';
import { BooksService } from './services/books.service';

@Injectable({
  providedIn: 'root'
})

export class BookListResolver implements Resolve<BookListResolved>{
  constructor(private booksService: BooksService) { }

 
   resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<BookListResolved> {

            return this.booksService.getAllBooks()
            .pipe(
              map(books => ({ books: books })),
              catchError(error => {
                const message = `Retrieval error: ${error}`;
                console.error(message);
                return of({ books: null, error: message });
              })
            );
    // return this.booksService.getAllBooks().pipe(
    //     map(book => ({ book: book }))
  }
}

