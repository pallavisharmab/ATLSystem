import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { BookResolved  } from '../models/books';
import { BooksService } from '../services/books.service';

@Injectable({
  providedIn: 'root'
})
export class BookResolver implements Resolve<BookResolved> {

  constructor(private booksService: BooksService) { }

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<BookResolved> {
    const id = route.paramMap.get('id');
    if (isNaN(+id)) {
      const message = `Book id was not a number: ${id}`;
     
      return of({ book: null, error: message });
    }

    return this.booksService.getBook(+id)
      .pipe(
        map(book => ({ book: book })),
        catchError(error => {
          const message = `Retrieval error: ${error}`;
         
          return of({ book: null, error: message });
        })
      );
  }

}


