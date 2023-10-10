import { Component } from '@angular/core';
import { BookListRequest } from '../models/book-list-request.model';
import { BookService } from '../services/book.service';
import { DatePipe } from '@angular/common';
import { environment } from 'src/environments/environment';
import { UserService } from '../../user/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-book-list',
  templateUrl: './home-book-list.component.html',
  styleUrls: ['./home-book-list.component.css']
})
export class HomeBookListComponent {
  bookList:BookListRequest[] = [];
  filteredBookList:BookListRequest[]=[];
  url = environment.baseUrl;
  searchText!:string;

  title!:string;
  description!:string;
  date!:string;
  constructor(private bookService:BookService, public datePipe:DatePipe, private userService:UserService, private router:Router){}

  ngOnInit(): void {
    this.loadBooks();
  } 

  loadBooks(){
    this.bookService.getAllBook().subscribe((bookData:any) => {
      this.bookList = bookData.books;
      this.filteredBookList=this.bookList;
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
        this.loadBooks();
      },
      error: (error) => {
        console.log("Error occured",error);
      }
    });
  }
  filterResults(text: string) {
    if (!text) {
      this.filteredBookList = this.bookList;
    }
  
    this.filteredBookList = this.bookList.filter(
      bookTitle => bookTitle?.title.toLowerCase().includes(text.toLowerCase())
    );
  }
  //To View
  onView(index:number){
    this.title = this.bookList[index].title
    this.description = this.bookList[index].description;
    this.date = this.bookList[index].yearPublished;
  }
  
}
