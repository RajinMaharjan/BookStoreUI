import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { BookListRequest } from '../models/book-list-request.model';
import { BookService } from '../services/book.service';
import { DatePipe } from '@angular/common';
import { environment } from 'src/environments/environment';
import { UserService } from '../../user/services/user.service';

@Component({
  selector: 'app-category-book-list',
  templateUrl: './category-book-list.component.html',
  styleUrls: ['./category-book-list.component.css']
})
export class CategoryBookListComponent implements OnInit,OnDestroy{
  bookList:BookListRequest[] = [];
  filteredBookList:BookListRequest[]=[];
  url = environment.baseUrl;
  searchText!:string;
  constructor(
    private bookService:BookService, 
    private userService:UserService,
    public datePipe:DatePipe,
    private route:ActivatedRoute
    )
    {}
  
  private subscription!:Subscription;
  category!:string;

  title!:string;
  description!:string;

  ngOnInit(): void {

    this.subscription = this.route.params.subscribe({

      next: (params) => {

        console.log(params);

        console.log(params['category']);

        this.category = params['category'];
      },

    });
    this.loadBooks(this.category);
  } 

  loadBooks(category:string){
    this.bookService.getBookByCategory(category).subscribe((bookData:any) => {
      this.bookList = bookData.books;
      this.filteredBookList = this.bookList;
      console.log(bookData);
    });
    
  }
  ngOnDestroy(): void {
    
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
        this.loadBooks(this.category);
      },
      error: (error) => {
        console.log("Error occured",error);
      }
    });
  }
  //To View
  onView(index:number){
    this.title = this.bookList[index].title
    this.description = this.bookList[index].description;
  }
  
}
