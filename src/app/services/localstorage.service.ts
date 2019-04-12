
import { Injectable } from '@angular/core';
import  { BOOKS } from '../data/books-mock';
import {USERS} from '../data/user-mock';
import { Book, BookListResolved } from '../models/books';
import { User , IssueDetails} from '../models/user';

@Injectable({providedIn: 'root'})
export class LocalStorageService { 
    books: Book[];
    issueData:IssueDetails;
    //book:Book;
    _HasData: boolean=false;
    constructor() { }
     
      LoadLocalStorage():void{
        var books= JSON.stringify(BOOKS);
        localStorage.setItem("books",books);
        var users= JSON.stringify(USERS);
        localStorage.setItem("users",users);

        localStorage.setItem("maxUserId","2");
        localStorage.setItem("maxBookId","112");

        this._HasData=true;
      }


      getAllBooks(): Book[]{
        if(!this._HasData)
        {
            this.LoadLocalStorage();
           
        }
            return JSON.parse(localStorage.getItem('books'));
        }

     getBook(id:number):Book{
        if(!this._HasData)
           {
              this.LoadLocalStorage();
           }
        else
           {
                var books=JSON.parse(localStorage.getItem('books'));
                for (var key in books) {
                if (id==books[key].id){
                return books[key];
            }
       } 
    }   
 }

     createBook(book:Book):Book{
        if(!this._HasData)
        {
           this.LoadLocalStorage();
        }
     else
        {
            var books=JSON.parse(localStorage.getItem('books'));
            book.id=parseInt(localStorage.getItem('maxBookId'))+1;
            book.imgUrl='/assets/noImage.JPG';
            books[books.length]=book;
            localStorage.setItem('books',JSON.stringify(books));
            localStorage.setItem('maxBookId',book.id.toString());
            return book;
        }
    }

    updateBook(book:Book):Book{
        if(!this._HasData)
        {
           this.LoadLocalStorage();
        }
     else
        {
            var books=JSON.parse(localStorage.getItem('books'));
           
            for (var key in books) {
                      if (book.id==books[key].id){
                        books[key]=book;
                        localStorage.setItem('books',JSON.stringify(books));
                        return book;
                    }
        } } }

    deleteBook(id: number):void{
            if(!this._HasData)
        {
           this.LoadLocalStorage();
        }
     else
        {
            var books=JSON.parse(localStorage.getItem('books'));
            for (var key in books) {
                       if (id==books[key].id){
                        this.books.splice(parseInt(key),1);
                        localStorage.setItem('books',JSON.stringify(this.books));
                       }
                    }
        }
    }

    ReturnBook(user:User,book:Book):void{
        //create User if not exits
        //if exists update user-also check if the user has 2 books rented
        //update book
        if(!this._HasData)
          {
             this.LoadLocalStorage();
          }
       else
          {
              var users=JSON.parse(localStorage.getItem('users'));
                //update user
                this.updateUser(user,book.id,users,"return");             
               //update book
               book.issued=false;
               this.updateBook(book);
          }
          
      }
    
    IssueBook(user:User,book:Book):void{
      //create User if not exits
      //if exists update user-also check if the user has 2 books rented
      //update book
      if(!this._HasData)
        {
           this.LoadLocalStorage();
        }
     else
        {
            var users=JSON.parse(localStorage.getItem('users'));
            if (this.checkIfExisting(users,user.id))
            {
              //update user
              this.updateUser(user,book.id,users,"issue");             
            }
            else{
                //create user
                this.createUser(user);
            }
             //update book
             book.issued=true;
             this.updateBook(book);
        }
        
    }
    private checkIfExisting(users:any,id:number):boolean{
        for (var key in users) {
            if (id==users[key].id){
                return true;
            }
    }
    }

    createUser(user:User):User{
        if(!this._HasData)
        {
           this.LoadLocalStorage();
        }
     else
        {
            var users=JSON.parse(localStorage.getItem('users'));
            user.id=parseInt(localStorage.getItem('maxUserId'))+1;
            //user.imgUrl='/assets/noImage.JPG';
            users[users.length]=user;
            localStorage.setItem('users',JSON.stringify(users));
            localStorage.setItem('maxUserId',user.id.toString());
            return user;
        }
    }

    private updateUser(user:User,bookId:number,users:any,action:string):void
    {
        if(action==="issue")
        {
          this.issueData={
            bookId:bookId,
            IssuedDate:Date.now.toString(),
            RenewedDate:null
          };
           
            user.booksIssued.push(this.issueData);
        }
        else if (action==="return")
        {
            var index=user.booksIssued.findIndex(x=>x.bookId==bookId);
            user.booksIssued.splice(index,1);
        }
       
        for (var key in users) {
            if (user.id==users[key].id){
                users[key]=user;
              localStorage.setItem('users',JSON.stringify(users));
          }
       }
    }

   

  ///------------------------







}