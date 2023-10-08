import { Component } from '@angular/core';
import { AddBookRequest } from '../models/add-book-request.model';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {
  model:AddBookRequest;

  constructor(private bookService:BookService){
    this.model = {
      title:'',
      category:'',
      author: '',
      yearPublished:new Date(),
      price: 0,
      image: null,
      description: ''

    }
  }


  onFormSubmit(){
    this.bookService.addBook(this.model)
    .subscribe({
      next: (response) => {
        console.log("Successful!!!");
      },
      error: (error) => {
        console.log("Error occured");
      }
    });
  }
}
