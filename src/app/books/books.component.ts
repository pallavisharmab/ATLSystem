import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Book, BookListResolved } from '../models/books';

import { BooksService } from '../services/books.service';


@Component({
  
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  pageTitle = 'Book List';
  errorMessage: string;
  books: Book[];
 //books=[];

 
  constructor(private bookService: BooksService,private route: ActivatedRoute) { }

  ngOnInit() {

    this.getBooks(); 
    
  }
  

  getBooks():void{
   
      const resolvedListData: BookListResolved =
      this.route.snapshot.data['resolvedListData'];
      this.errorMessage = resolvedListData.error;
      this.books=resolvedListData.books;
     }
 
  } 
  

