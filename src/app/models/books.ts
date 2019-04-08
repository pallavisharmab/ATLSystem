export class Book {
    id: number;
    bookTitle: string;
    genre: string;
    author: string;
    cost: number;
    imgUrl: string;
    issued: boolean;
    isbn: string;
    description: string;
}

export interface BookResolved {
    book: Book;
    error?: any;
  }

  export interface BookListResolved {
    books: Book[];
    error?: any;
  }