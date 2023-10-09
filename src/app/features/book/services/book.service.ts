import { Injectable } from '@angular/core';
import { AddBookRequest } from '../models/add-book-request.model';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BookListRequest } from '../models/book-list-request.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  bookListUrl = 'Books/getAllBooks';
  constructor(
    private http:HttpClient
  ) { }

  addBook(model:FormData):Observable<void>{
    return this.http.post<void>('https://localhost:7148/api/Books/addBook',model);
  }

  public getAllBook():Observable<any>{
    return this.http.get(`${environment.apiUrl}/${this.bookListUrl}`);
  }
}
