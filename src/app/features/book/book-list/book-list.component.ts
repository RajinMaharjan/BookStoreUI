import { Component, OnInit, Input } from '@angular/core';
import { BookService } from '../services/book.service';
import { BookListRequest } from '../models/book-list-request.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit{

  bookList:BookListRequest[] = [];
  url = environment.imageUrl;
  
  constructor(private bookService:BookService){}

  ngOnInit(): void {
    this.loadBooks();
  } 


  loadBooks(){
    this.bookService.getAllBook().subscribe((bookData:any) => {
      this.bookList = bookData.books;
      console.log(bookData);
    });
  }
}
