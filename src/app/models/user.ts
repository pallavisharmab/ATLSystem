import { NumberSymbol } from '@angular/common';

/* Defines the user entity */
export interface User {
  email: string;
  id: number;
  userName: string;
  password: string;
  isAdmin: boolean;
  booksIssued: IssueDetails[];
  image: string;
}
export interface IssueDetails {
  bookId: number;
  Title: string;
  IssuedDate: string;
  RenewedDate: string;
}
