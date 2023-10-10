import { Component, OnInit } from '@angular/core';
import { BookListRequest } from '../models/book-list-request.model';
import { DatePipe } from '@angular/common';
import { environment } from 'src/environments/environment';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-book-list-sorted',
  templateUrl: './book-list-sorted.component.html',
  styleUrls: ['./book-list-sorted.component.css']
})
export class BookListSortedComponent implements OnInit{
  bookList:BookListRequest[] = [];
  url = environment.baseUrl;
  
  constructor(private bookService:BookService, public datePipe:DatePipe){}

  ngOnInit(): void {
    this.loadBooks(this.bookService.sort);
  } 

  loadBooks(sort:boolean){
    if(sort){
      this.bookService.getSortedBookAsc().subscribe((bookData:any) => {
        this.bookList = bookData.books;
        console.log(bookData);
      });
    }else{
      this.bookService.getSortedBookDesc().subscribe((bookData:any) => {
        this.bookList = bookData.books;
        console.log(bookData);
      });
    }
  }

}
