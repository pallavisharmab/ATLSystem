import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Book, BookResolved } from '../models/books';
import { AuthService } from '../services/auth.service';
import { AuthGuard } from '../login/auth.guard';
import { BooksService } from '../services/books.service';
import { AlertService } from '../services/alert.service';


@Component({
  
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookdetailComponent implements OnInit {
   book: Book;
  pageTitle = 'Book Detail';
  errorMessage: string;

  get isAdmin(): boolean {
    if (this.authService.currentUser.isAdmin)
    return true ;
  }
  get IsissuedToCurrentUser():boolean{
    if(!this.isAdmin){
    if (this.authService.currentUser.booksIssued.length>0)
    {
      if (this.authService.currentUser.booksIssued.find(x=>x.bookId==this.book.id))
      return true;
    }
  } 
    
  }
  get canIssueBooks():boolean{
    if(!this.isAdmin){
    if (this.authService.currentUser.booksIssued.length<2)
    {
      return true;
    }
  } 
    
  }
  constructor(
    private bookService: BooksService,
    private route: ActivatedRoute,
    private authService: AuthService,private alertService: AlertService
    ) { }

    ngOnInit(): void {
      this.getBook();
    }
    
    getBook():void {
      const resolvedData: BookResolved =
      this.route.snapshot.data['resolvedData'];
      this.errorMessage = resolvedData.error;
      this.onBookRetrieved(resolvedData.book);
    }

    onBookRetrieved(book: Book): void {
      this.book = book;

      if (this.book) {
        this.pageTitle = `Book Detail: ${this.book.bookTitle}`;
      } else {
        this.pageTitle = 'No Book found';
        this.errorMessage="No Data";
      }
    }

    IssueBook():void{
      if (!this.canIssueBooks) {
        this.alertService.error("You have already rented 2 books!!");
      }
      else{
        this.alertService.success(this.book.bookTitle+ " Issued successfully!!");
        this.bookService.issueBook(this.authService.currentUser,this.book);
      }
     
    }
    ReturnBook():void{
      this.alertService.success(this.book.bookTitle+ " returned successfully!!");
      this.bookService.returnBook(this.authService.currentUser,this.book);
    }
    RenewBook():void{
      this.alertService.success(this.book.bookTitle+ " renewed successfully!!");
      this.bookService.renewBook(this.authService.currentUser,this.book);

    }
    onSaveComplete(message?: string): void {
      if (message) {
        //add a message
      };
}
    
    
}
  
