import { Component} from '@angular/core';
import { AddBookRequest } from '../models/add-book-request.model';
import { BookService } from '../services/book.service';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent{

  model:AddBookRequest ={
    title:'',
    category:'',
    author: '',
    yearPublished:new Date(),
    price: 0,
    image: null,
    description: ''

  };

  constructor(private bookService:BookService, private router:Router){}

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
    this.uploadFormData(formData);    
    this.router.navigate(['/home/admin/book-list']);
    this.redirectTo('/home/admin/book-list');
  }


  uploadFormData(formData:FormData){
    this.bookService.addBook(formData)
    .subscribe({
      next: (response) => {
        console.log("Successful!!!",response);
      },
      error: (error) => {
        console.log("Error occured",error);
      }
    });
  }

  redirectTo(uri: string) {

    this.router

      .navigateByUrl('/', { skipLocationChange: true })

      .then(() => this.router.navigate([uri]));

  }
}
