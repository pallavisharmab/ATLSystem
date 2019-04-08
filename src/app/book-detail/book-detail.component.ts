import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Book, BookResolved } from '../models/books';
import { AuthService } from '../services/auth.service';
import { AuthGuard } from '../login/auth.guard';

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
  constructor(private route: ActivatedRoute,private authService: AuthService) { }

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
    
    
}
  
