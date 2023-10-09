import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { BookListRequest } from '../models/book-list-request.model';
import { BookService } from '../services/book.service';
import { DatePipe } from '@angular/common';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-category-book-list',
  templateUrl: './category-book-list.component.html',
  styleUrls: ['./category-book-list.component.css']
})
export class CategoryBookListComponent implements OnInit,OnDestroy{
  bookList:BookListRequest[] = [];
  url = environment.baseUrl;
  constructor(private bookService:BookService, public datePipe:DatePipe,private route:ActivatedRoute, private router:Router){}
  
  private subscription!:Subscription;
  category!:string;
  ngOnInit(): void {

    this.subscription = this.route.params.subscribe({

      next: (params) => {

        console.log(params);

        console.log(params['category']);

        this.category = params['category'];

        //this.loadProject();

      },

    });
    this.loadBooks(this.category);
  } 

  loadBooks(category:string){
    this.bookService.getBookByCategory(category).subscribe((bookData:any) => {
      this.bookList = bookData.books;
      console.log(bookData);
    });
    
  }
  ngOnDestroy(): void {
    
  }
  
}
