import { Component, OnInit } from '@angular/core';
import { BookListRequest } from '../models/book-list-request.model';
import { DatePipe } from '@angular/common';
import { environment } from 'src/environments/environment';
import { BookService } from '../services/book.service';
import { UserService } from '../../user/services/user.service';

@Component({
  selector: 'app-book-list-sorted',
  templateUrl: './book-list-sorted.component.html',
  styleUrls: ['./book-list-sorted.component.css']
})
export class BookListSortedComponent implements OnInit{
  bookList:BookListRequest[] = [];
  filteredBookList:BookListRequest[]=[];
  url = environment.baseUrl;
  searchText!:string;
  
  constructor(private bookService:BookService,private userService:UserService, public datePipe:DatePipe){}

  ngOnInit(): void {
    this.loadBooks(this.bookService.sort);
  } 

  loadBooks(sort:boolean){
    if(sort){
      this.bookService.getSortedBookAsc().subscribe((bookData:any) => {
        this.bookList = bookData.books;
        this.filteredBookList = this.bookList;
        console.log(bookData);
      });
    }else{
      this.bookService.getSortedBookDesc().subscribe((bookData:any) => {
        this.bookList = bookData.books;
        this.filteredBookList = this.bookList;
        console.log(bookData);
      });
    }
  }
  filterResults(text: string) {
    if (!text) {
      this.filteredBookList = this.bookList;
    }
  
    this.filteredBookList = this.bookList.filter(
      bookTitle => bookTitle?.title.toLowerCase().includes(text.toLowerCase())
    );
  }
  onBuyBook(bId:string){
    this.buyBook(bId,this.userService.user.id);
  }
  buyBook(bId:string,uId:string){
    this.bookService.purchaseBook(bId,uId).subscribe({
      next: (response) => {
        console.log("Successful!!!",response);
      },
      error: (error) => {
        console.log("Error occured",error);
      }
    });
  }

}
