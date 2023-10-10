import { Component, OnInit, Input } from '@angular/core';
import { BookService } from '../services/book.service';
import { BookListRequest } from '../models/book-list-request.model';
import { environment } from 'src/environments/environment';
import { DatePipe } from '@angular/common';
import { AddBookRequest } from '../models/add-book-request.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit{

  bookList:BookListRequest[] = [];
  
  url = environment.baseUrl;
  selectedIndex:number=0;
  
  constructor(private bookService:BookService, public datePipe:DatePipe, private router:Router){}

  ngOnInit(): void {
    this.loadBooks();
  } 

  loadBooks(){
    this.bookService.getAllBook().subscribe((bookData:any) => {
      this.bookList = bookData.books;
      console.log(bookData);
    });
  }
  
  //For editing image
  model:AddBookRequest ={
    title:'',
    category:'',
    author: '',
    yearPublished:new Date(),
    price: 0,
    image: null,
    description: ''
  };

  onEdit(index:number){
    this.selectedIndex = index;
    this.model.title = this.bookList[index].title
    this.model.category = this.bookList[index].category
    this.model.author = this.bookList[index].author
    const dateString = this.bookList[index].yearPublished;

    const date = new Date(dateString);
    const formattedDate = date.toISOString().slice(0, 10);
    this.model.yearPublished = new Date(date.toDateString())
    console.log(this.bookList[index].yearPublished);
    console.log(formattedDate);

    this.model.price = this.bookList[index].price
    this.model.description = this.bookList[index].description    
  }
  onFileChange(event:any){
    if(event.target.files && event.target.files.length>0){
      const file = event.target.files[0];
      this.model.image = file;
    }
  }
  onFormSubmit(){
    const formData = new FormData();
    formData.set("title",this.model.title);
    formData.set("author",this.model.author);
    formData.set("category",this.model.category);
    formData.set("yearPublished",new Date(this.model.yearPublished).toISOString());
    formData.set("price",String(this.model.price));
    formData.set("description",this.model.description);

    if(this.model.image){
      formData.append('image',this.model.image,this.model.image.name);
    }
    this.editBookData(formData,this.bookList[this.selectedIndex].id);
  }
  editBookData(formData:FormData,id:string){
    this.bookService.updateBook(formData,id)
    .subscribe({
      next: (response) => {
        console.log("Successful!!!",response);
        this.redirectTo('/home/admin/book-list');
        
      },
      error: (error) => {
        console.log("Error occured",error);
      }
    });
  }
// For Deleting Book
  onDelete(index:number){
    this.selectedIndex = index;
  }

  onDeleteBook(){
    this.deleteBookData(this.bookList[this.selectedIndex].id)
  }
  
  deleteBookData(id:string){
    this.bookService.deleteBook(id)
    .subscribe({
      next: (response) => {
        console.log("Deleted",response);
        this.redirectTo('/home/admin/book-list');
        
      },
      error: (error) => {
        console.log("Error occured",error);
      }
    });
  }

  //To refresh page
  redirectTo(uri: string) {

    this.router

      .navigateByUrl('/', { skipLocationChange: true })

      .then(() => this.router.navigate([uri]));

  }
}
