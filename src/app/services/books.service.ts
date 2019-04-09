
import { Injectable } from '@angular/core';
import { Book } from '../models/books';
import { User } from '../models/user';




import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BooksComponent } from '../books/books.component';


 
@Injectable({providedIn: 'root'})
export class BooksService { 
  
   private bookUrl = 'api/books';
  localbooks: Book[];
  localbook: Book;
  // private bookUrl ='../assets/books.json';
 
 constructor(private http: HttpClient) { }
 
  getAllBooks(): Observable<Book[]>{
    //localStorage.clear();
   
    if(localStorage.getItem('books') === null){
      return this.http.get<Book[]>(this.bookUrl)//(this.baseUrl + '/Books')
      .pipe(
        tap(data => console.log(JSON.stringify(data))),
        catchError(this.handleError)
      );
    }else{
      var books=JSON.parse(localStorage.getItem('books'));
         this.localbooks=books;
         return of(this.localbooks);
    }
      }
         
  getBook(id: number): Observable<Book> {
          if (id === 0) {
            return of(this.initializeProduct());
          }
          if(localStorage.getItem('books') === null){
               const url = `${this.bookUrl}/${id}`;
                  return this.http.get<Book>(url)
                  .pipe(
                  tap(data => console.log(`fetched book id=${id}`)),
                  catchError(this.handleError)
                 );
            }else{
              var books=JSON.parse(localStorage.getItem('books'));
              for (var key in books) {
                if (id==books[key].id){
                  console.log(books[key]);
                 this.localbook=books[key];
                 return of(this.localbook);
                }
               }
            }
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
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    book.id = null;
    
    if(localStorage.getItem('books') != null){
      book.id=parseInt(localStorage.getItem('maxBookId'))+1;
      book.imgUrl='/assets/noImage.JPG';
      var books=JSON.parse(localStorage.getItem('books'));
      books[books.length]=book;
      localStorage.setItem('books',JSON.stringify(books));
      localStorage.setItem('maxBookId',book.id.toString());
     return of(book);
    }
    else{
      return this.http.post<Book>(this.bookUrl, book, { headers: headers })
      .pipe(
        tap(data => console.log('createBook: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
    }
   

   
  }

  updateBook(book: Book): Observable<Book> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.bookUrl}/${book.id}`;
    if(localStorage.getItem('books') != null){
     // book.id=parseInt(localStorage.getItem('maxBookId'))+1;
      //book.imgUrl='/assets/noImage.JPG';
      var books=JSON.parse(localStorage.getItem('books'));

      for (var key in books) {
        if (book.id==books[key].id){
          books[key]=book;
          localStorage.setItem('books',JSON.stringify(books));
          return of(book);
        }
    }
  }
    else
    {
    return this.http.put<Book>(url, book, { headers: headers })
      .pipe(
        tap(() => console.log('updateBook: ' + book.id)),
        // Return the product on an update
        map(() => book),
        catchError(this.handleError)
      );
    }
  }

  deleteBook(id: number): Observable<{}> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.bookUrl}/${id}`;
    if(localStorage.getItem('books') != null){
       var books=JSON.parse(localStorage.getItem('books'));
       this.localbooks=books;
      
       for (var key in books) {
         if (id==books[key].id){
          this.localbooks.splice(parseInt(key),1);
         
          localStorage.setItem('books',JSON.stringify(this.localbooks));
          //localStorage.setItem('maxBookId',(books[key].id)-1));
           return of(this.initializeProduct());
         }
     }
   }
     else
     {
    return this.http.delete<Book>(url, { headers: headers })
      .pipe(
        tap(data => console.log('deleteBook: ' + id)),
        catchError(this.handleError)
      );
  }
}

  issueBook(Id:number,userId:number){
    // const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    // return this.http.put<Book>(url, book, { headers: headers })
    //   .pipe(
    //     tap(() => console.log('updateBook: ' + book.id)),
    //     // Return the product on an update
    //     map(() => book),
    //     catchError(this.handleError)
    //   );
  }

}

