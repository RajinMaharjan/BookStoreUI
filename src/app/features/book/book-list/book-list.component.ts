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
  filteredBookList:BookListRequest[]=[];
  url = environment.baseUrl;
  searchText!:string;
  selectedIndex:number=0;

  title!:string;
  description!:string;

  //for pagination
  first!:number;
  rows:number = 10;
  totalRecords!:number;
  //
  
  constructor(private bookService:BookService, public datePipe:DatePipe, private router:Router){}

  ngOnInit(): void {
    this.loadBooks();
  } 

  loadBooks(){
    this.bookService.getAllBook().subscribe((bookData:any) => {
      this.bookList = bookData.books;
      this.filteredBookList=this.bookList;
      this.totalRecords = this.bookList.length + 1 ;
      console.log(bookData);
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

  onEdit(book:any){
    this.selectedIndex = this.filteredBookList.indexOf(book);
    this.model.title = this.bookList[this.selectedIndex].title
    this.model.category = this.bookList[this.selectedIndex].category
    this.model.author = this.bookList[this.selectedIndex].author
    const dateString = this.bookList[this.selectedIndex].yearPublished;

    const date = new Date(dateString);
    const formattedDate = date.toISOString().slice(0, 10);
    this.model.yearPublished = new Date(date.toDateString())
    console.log(this.bookList[this.selectedIndex].yearPublished);
    console.log(formattedDate);

    this.model.price = this.bookList[this.selectedIndex].price
    this.model.description = this.bookList[this.selectedIndex].description    
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
        alert(error.error.message);
      }
    });
  }
// For Deleting Book
  onDelete(book:any){
    this.selectedIndex = this.filteredBookList.indexOf(book);
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

  //To View
  onView(book:any){
    this.selectedIndex = this.filteredBookList.indexOf(book);
    this.title = this.bookList[this.selectedIndex ].title
    this.description = this.bookList[this.selectedIndex ].description;
  }



  //To refresh page
  redirectTo(uri: string) {

    this.router

      .navigateByUrl('/', { skipLocationChange: true })

      .then(() => this.router.navigate([uri]));

  }
}
