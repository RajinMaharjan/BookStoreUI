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
  constructor(
    private http:HttpClient
  ) { }

  addBook(model:FormData):Observable<void>{
    return this.http.post<void>(`${environment.bookApiUrl}/addBook`,model);
  }

  public getAllBook():Observable<any>{
    return this.http.get(`${environment.bookApiUrl}/getAllBooks`);
  }
  getBookByCategory(category:string):Observable<any>{
    return this.http.get(`${environment.bookApiUrl}/booksByCategory/${category}`);
  }

  updateBook(model:FormData,id:string):Observable<void>{
    return this.http.put<void>(`${environment.bookApiUrl}/updateBook/${id}`,model);
  }

  deleteBook(id:string):Observable<void>{
    return this.http.delete<void>(`${environment.bookApiUrl}/deleteBook/${id}`);
  }
}
