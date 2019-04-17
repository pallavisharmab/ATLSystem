
import { Injectable } from '@angular/core';
import { BOOKS } from '../data/books-mock';
import {USERS } from '../data/user-mock';
import { Book, BookListResolved } from '../models/books';
import { User , IssueDetails} from '../models/user';

@Injectable({providedIn: 'root'})
export class LocalStorageService {

    HasData = false;
    constructor() { }

      LoadLocalStorage(): void {
        const books = JSON.stringify(BOOKS);
        localStorage.setItem('books', books);
        const users = JSON.stringify(USERS);
        localStorage.setItem('users', users);

        localStorage.setItem('maxUserId', '2');
        localStorage.setItem('maxBookId', '112');
        localStorage.setItem('user', null);

        this.HasData = true;
      }

getNextMaxUserId(): number {
  if (!this.HasData) {
      this.LoadLocalStorage();

  }
  return Number(localStorage.getItem('maxUserId')) + 1;
}
    getAllBooks(): Book[] {
        if (!this.HasData) {
            this.LoadLocalStorage();

        }
        return JSON.parse(localStorage.getItem('books'));
    }

     getIssuedBooks(): User[] {
          if (!this.HasData) {
            this.LoadLocalStorage();

        }
          const id = 1;
          const users =  JSON.parse(localStorage.getItem('users'));
          for (const key in users) {
              if (id === users[key].id) {
                users.splice(Number(key), 1);
               }
           }
          return users;
    }


     getBook(id: number): Book {
        if (!this.HasData) {
              this.LoadLocalStorage();
           } else {
                const books = JSON.parse(localStorage.getItem('books'));
                for (const key in books) {
                if (id === books[key].id) {
                return books[key];
            }
       }
    }
    }

     createBook(book: Book): Book {
        if (!this.HasData) {
           this.LoadLocalStorage();
        } else {
            const books = JSON.parse(localStorage.getItem('books'));
            book.id = Number(localStorage.getItem('maxBookId')) + 1;
            book.imgUrl = '/assets/noImage.JPG';
            books[books.length] = book;
            localStorage.setItem('books', JSON.stringify(books));
            localStorage.setItem('maxBookId', book.id.toString());
            return book;
        }
    }

    updateBook(book: Book): Book {
        if (!this.HasData) {
           this.LoadLocalStorage();
        } else {
            const books = JSON.parse(localStorage.getItem('books'));

            for (const key in books) {
                      if (book.id === books[key].id) {
                        books[key] = book;
                        localStorage.setItem('books', JSON.stringify(books));
                        return book;
                    }
        } } }

    deleteBook(id: number): void {
            if (!this.HasData) {
           this.LoadLocalStorage();
        } else {
            const books = JSON.parse(localStorage.getItem('books'));
            for (const key in books) {
                       if (id === books[key].id) {
                        books.splice(Number(key), 1);
                        localStorage.setItem('books', JSON.stringify(books));
                       }
                    }
        }
    }

    ReturnBook(user: User, book: Book): void {
        // create User if not exits
        // if exists update user-also check if the user has 2 books rented
        // update book
        if (!this.HasData) {
             this.LoadLocalStorage();
          } else {
              const users = JSON.parse(localStorage.getItem('users'));
                // update user
              this.updateUser(user, book.id, users, 'return');
               // update book
              book.issued = false;
              this.updateBook(book);
          }

      }

    IssueBook(user: User, book: Book): void {
      // create User if not exits
      // if exists update user-also check if the user has 2 books rented
      // update book
      if (!this.HasData) {
           this.LoadLocalStorage();
        } else {
            const users = JSON.parse(localStorage.getItem('users'));
            if (!this.checkIfExisting(users, user.id)) {
               // create user
              this.createUser(user);

            }
            // update user
            this.updateUser(user, book.id, users, 'issue');
             // update book
            book.issued = true;
            this.updateBook(book);
        }

    }

    RenewBook(user: User, book: Book): boolean {
        if (!this.HasData) {
             this.LoadLocalStorage();
          } else {
              const users = JSON.parse(localStorage.getItem('users'));
                // update user
              return this.updateUser(user, book.id, users, 'renew');

          }

    }

    private checkIfExisting(users: any, id: number): boolean {
        for (const key in users) {
            if (id === users[key].id) {
                return true;
            }
    }
    }

    createUser(user: User): User {
        if (!this.HasData) {
           this.LoadLocalStorage();
        } else {
            const users = JSON.parse(localStorage.getItem('users'));
            // user.id=parseInt(localStorage.getItem('maxUserId'))+1;
            // user.imgUrl='/assets/noImage.JPG';
            users[users.length] = user;
            localStorage.setItem('users', JSON.stringify(users));
            localStorage.setItem('maxUserId', user.id.toString());
            return user;
        }
    }

    private updateUser(user: User, bookId: number, users: any, action: string): boolean {
      let issueData: IssueDetails;
      const issuedBook = this.getBook(bookId);
      if (action === 'issue') {
          issueData = {
            bookId,
            Title: issuedBook.bookTitle,
            IssuedDate: new Date().toLocaleDateString(),
            RenewedDate: null
          };

          user.booksIssued.push(issueData);
          this.updatelocalstorage(user);
          return true;
        } else if (action === 'return') {
            const index = user.booksIssued.findIndex(x => x.bookId === bookId);
            user.booksIssued.splice(index, 1);
            this.updatelocalstorage(user);
            return true;
        } else if (action === 'renew') {
            const index = user.booksIssued.findIndex(x => x.bookId === bookId);
            if (user.booksIssued[index].RenewedDate != null && user.booksIssued[index].RenewedDate.length > 0) {
            return false;
            } else {
              user.booksIssued[index].RenewedDate = new Date().toLocaleDateString();
              this.updatelocalstorage(user);
              return true;
            }

        }
       }

    private updatelocalstorage(user: User): void {
        const users = JSON.parse(localStorage.getItem('users'));
        for (const key in users) {
          if (user.id === users[key].id) {
              users[key] = user;
              localStorage.setItem('users', JSON.stringify(users));
        }
       }
    }



  /// ------------------------







}
