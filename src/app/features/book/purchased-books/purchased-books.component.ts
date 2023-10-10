import { Component } from '@angular/core';
import { BookListRequest } from '../models/book-list-request.model';
import { BookService } from '../services/book.service';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { UserService } from '../../user/services/user.service';

@Component({
  selector: 'app-purchased-books',
  templateUrl: './purchased-books.component.html',
  styleUrls: ['./purchased-books.component.css']
})
export class PurchasedBooksComponent {
  bookList:BookListRequest[] = [];  
  url = environment.baseUrl;

  constructor(
    private bookService:BookService, 
    public datePipe:DatePipe, 
    private router:Router, 
    private userService:UserService
    ){}

  ngOnInit(): void {
    this.loadBooks();
  } 

  loadBooks(){
    this.bookService.getPurchasedBook(this.userService.user.id).subscribe((bookData:any) => {
      this.bookList = bookData.books;
      console.log(bookData);
    });
  }
  
}
