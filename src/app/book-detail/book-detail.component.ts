import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book, BookResolved } from '../models/books';
import { User} from '../models/user';
import { LocalAuthService } from '../services/localauth.service';
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

  ratingClicked: number;
  itemIdRatingClicked: string;

  get isAdmin(): boolean {
    if (this.localauthService.currentUser.isAdmin)
      return true;
  }
  get IsissuedToCurrentUser(): boolean {
    if (!this.isAdmin) {
      if (this.localauthService.currentUser.booksIssued!=null && this.localauthService.currentUser.booksIssued.length > 0) {
        if (this.localauthService.currentUser.booksIssued.find(x => x.bookId == this.book.id))
          return true;
      }
    }
  }
  get canIssueBooks(): boolean {
    if (!this.isAdmin) {
      if (this.localauthService.currentUser.booksIssued===null ||this.localauthService.currentUser.booksIssued.length < 2  ){
       
        return true;
      
    }
    }
  }
  constructor(private bookService: BooksService, 
    private route: ActivatedRoute, 
    private alertService: AlertService, private localauthService: LocalAuthService) { }
  ngOnInit(): void {
    this.getBook();
  }
  getBook(): void {
    const resolvedData: BookResolved = this.route.snapshot.data['resolvedData'];
    this.errorMessage = resolvedData.error;
    this.onBookRetrieved(resolvedData.book);
  }
  onBookRetrieved(book: Book): void {
    this.book = book;
    if (this.book) {
      this.pageTitle = `Book Detail: ${this.book.bookTitle}`;
    }
    else {
      this.pageTitle = 'No Book found';
      this.errorMessage = "No Data";
    }
  }
  IssueBook(): void {
    if (!this.canIssueBooks) {
      this.alertService.error("You have already rented 2 books!!");
    }
    else {
      this.alertService.success(this.book.bookTitle + " Issued successfully!!");
      this.bookService.issueBook(this.localauthService.currentUser, this.book);
    }
  }
  ReturnBook(): void {
    this.alertService.success(this.book.bookTitle + " returned successfully!!");
    this.bookService.returnBook(this.localauthService.currentUser, this.book);
  }
  RenewBook(): void {
   
    
    if (this.bookService.renewBook(this.localauthService.currentUser, this.book)===true)
    {
      this.alertService.success(this.book.bookTitle + " renewed successfully!!");
    }
    else{
      this.alertService.success(this.book.bookTitle + " cannot be renewed again!!");
    }

  }
  ratingComponentClick(clickObj: any): void {
    const item = this.book
    if (!!item) {
      item.starRating = clickObj.rating;
      this.ratingClicked = clickObj.rating;
      this.itemIdRatingClicked = this.book.bookTitle;
    }

  }
  like():void{
    this.book.likes=this.book.likes+1;
    
  }
  onSaveComplete(message?: string): void {
    if (message) {
      //add a message
    };
  }
}
