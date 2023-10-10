import { Component } from '@angular/core';
import { BookListRequest } from '../models/book-list-request.model';
import { BookService } from '../services/book.service';
import { DatePipe } from '@angular/common';
import { environment } from 'src/environments/environment';
import { UserService } from '../../user/services/user.service';

@Component({
  selector: 'app-home-book-list',
  templateUrl: './home-book-list.component.html',
  styleUrls: ['./home-book-list.component.css']
})
export class HomeBookListComponent {
  bookList:BookListRequest[] = [];
  url = environment.baseUrl;
  
  constructor(private bookService:BookService, public datePipe:DatePipe, private userService:UserService){}

  ngOnInit(): void {
    this.loadBooks();
  } 

  loadBooks(){
    this.bookService.getAllBook().subscribe((bookData:any) => {
      this.bookList = bookData.books;
      console.log(bookData);
    });
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
