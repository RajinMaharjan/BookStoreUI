import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  constructor(
    private http:HttpClient
  ) { }

  sort:boolean = true;

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

  getSortedBookAsc(){
    return this.http.get(`${environment.bookApiUrl}/getAllBooksByPriceAscending`);
  }
  getSortedBookDesc(){
    return this.http.get(`${environment.bookApiUrl}/getAllBooksByPriceDescending`);
  }

  purchaseBook(bId:string,uId:string){
    const requestBody = {}
    return this.http.post(`${environment.bookApiUrl}/purchaseBook/${bId}/${uId}`,requestBody);
  }
  getPurchasedBook(uId:string){
    return this.http.get(`${environment.bookApiUrl}/purchasedBook/${uId}`);
  }
}
