import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Book,BookResolved } from '../models/books';
import { BooksService } from '../services/books.service';

import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {
  @ViewChild(NgForm) bookForm: NgForm;
  pageTitle = 'Book Edit';
  errorMessage: string;
  private dataIsValid: { [key: string]: boolean } = {};

  private currentBook: Book;
  private originalBook: Book;
  // book: Book;

  get book(): Book {
    return this.currentBook;
  }
  set book(value: Book) {
    this.currentBook = value;
    // Clone the object to retain a copy
    this.originalBook = { ...value };
  }
  constructor(private bookService: BooksService,
              private route: ActivatedRoute,
              private router: Router,
         private authservice: AuthService) { }

  ngOnInit() {
    if(this.authservice.currentUser.isAdmin)
    {
      this.route.data.subscribe(data => {
      const resolvedData: BookResolved = data['resolvedData'];
      this.errorMessage = resolvedData.error;
      this.onBookRetrieved(resolvedData.book);
    });
  }
  else{
    
  this.router.navigateByUrl('/home');
}
  
  }

  onBookRetrieved(book: Book): void {
    this.book = book;

    if (!this.book) {
      this.pageTitle = 'No book found';
    } else {
      if (this.book.id === 0 && this.authservice.currentUser.isAdmin ) {
        this.pageTitle = 'Add Book';
      } else {
        this.pageTitle = `Edit Book: ${this.book.bookTitle}`;
      }
    }
  }

  saveBook(): void {
    if (this.isValid()) {
      if (this.book.id === 0) {
        this.bookService.createBook(this.book)
          .subscribe(
            () => this.onSaveComplete(`The new ${this.book.bookTitle} was saved`),
            (error: any) => this.errorMessage = <any>error
          );
      } else {
        this.bookService.updateBook(this.book)
          .subscribe(
            () => this.onSaveComplete(`The updated ${this.book.bookTitle} was saved`),
            (error: any) => this.errorMessage = <any>error
          );
      }
    } else {
      this.errorMessage = 'Please correct the validation errors.';
    }
  }
  
  deleteBook(): void {
    if (this.book.id === 0) {
      // Don't delete, it was never saved.
      this.onSaveComplete(`${this.book.bookTitle} was deleted`);
    } else {
      if (confirm(`Really delete the book: ${this.book.bookTitle}?`)) {
        this.bookService.deleteBook(this.book.id)
          .subscribe(
            () => this.onSaveComplete(`${this.book.bookTitle} was deleted`),
            (error: any) => this.errorMessage = <any>error
          );
      }
    }
  }

  onSaveComplete(message?: string): void {
    if (message) {
     //add message
    }
    this.reset();

    // Navigate back to the product list
    this.router.navigate(['/books']);
  }


  reset(): void {
    this.dataIsValid = null;
    this.currentBook = null;
    this.originalBook = null;
  }



  isValid(path?: string): boolean {
    this.validate();
    if (path) {
      return this.dataIsValid[path];
    }
    return (this.dataIsValid &&
      Object.keys(this.dataIsValid).every(d => this.dataIsValid[d] === true));
  }

  validate(): void {
    // Clear the validation object
    this.dataIsValid = {};

    // 'info' tab
    if (this.book.bookTitle &&
      this.book.bookTitle.length >= 3 &&
      this.book.bookTitle) {
      this.dataIsValid['info'] = true;
    } else {
      this.dataIsValid['info'] = false;
    }

    // 'tags' tab
    if (this.book.genre &&
      this.book.genre.length >= 3) {
      this.dataIsValid['tags'] = true;
    } else {
      this.dataIsValid['tags'] = false;
    }
  }

 

}
