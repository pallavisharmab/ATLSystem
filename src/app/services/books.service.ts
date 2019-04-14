
import { Injectable } from '@angular/core';
import { Book } from '../models/books';
import { User } from '../models/user';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BooksComponent } from '../books/books.component';
//import  { BOOKS } from '../data/books-mock';
import { LocalStorageService } from './localstorage.service';
import { UseExistingWebDriver } from 'protractor/built/driverProviders';

 
@Injectable({providedIn: 'root'})
export class BooksService { 
  
   private bookUrl = 'api/books';
  localbooks: Book[];
  //localbook: Book;
  // private bookUrl ='../assets/books.json';
 
 constructor(private http: HttpClient, private localstorageservice:LocalStorageService) { }
 
  getAllBooks(): Observable<Book[]>{
   return of(this.localstorageservice.getAllBooks());
    }
         
  getBook(id: number): Observable<Book> {
          if (id === 0) {
            return of(this.initializeProduct());
          }
          return of(this.localstorageservice.getBook(id));
      }
  

  private initializeProduct(): Book {
    // Return an initialized object
    return {
      id : 0,
      bookTitle :null,
      genre : null,
      author : null,
      cost : 0,
      imgUrl : null,
      issued : null,
      isbn : null,
      description :null
    };
  }

  private handleError(err) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }

  createBook(book: Book): Observable<Book> {
    return of(this.localstorageservice.createBook(book));
  }

  updateBook(book: Book): Observable<Book> {
   return of(this.localstorageservice.updateBook(book));
  }

  deleteBook(id: number): Observable<{}> {
    this.localstorageservice.deleteBook(id);
    return of(this.initializeProduct());
}

  issueBook(user:User,book:Book): void {
    this.localstorageservice.IssueBook(user,book);
   
  }

  returnBook(user:User,book:Book):void{
   this.localstorageservice.ReturnBook(user,book) ;
   
  }
  renewBook(user:User,book:Book):void{
    this.localstorageservice.RenewBook(user,book) ;
    
   }

}

