import { Component, OnInit } from '@angular/core';
import { BooksService } from '../services/books.service';
import { User } from '../models/user';
import { Book } from '../models/books';
@Component({
  selector: 'app-issuedbooks',
  templateUrl: './issuedbooks.component.html',
  styleUrls: ['./issuedbooks.component.css']
})
export class IssuedbooksComponent implements OnInit {
  users: User[];
  constructor(private bookservice: BooksService) { }

  ngOnInit() {
   this.users = this.getIssuedBooks();
  }
  getIssuedBooks(): User[] {
 return this.bookservice.getIssuedBooks();
  }

}
