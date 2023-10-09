import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { RegisterUser } from '../models/register-user-request.model';
import { LoginUser } from '../models/login-user-request.model';
import { environment } from 'src/environments/environment';
import { JwtAuth } from '../models/jwtAuth.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  registerUrl = "Users/register";
  loginUrl = "Users/login";
  bookUrl = "Books/getAllBooks";
  constructor(
    private http:HttpClient
  ) { }

  public registerUser(model:RegisterUser):Observable<JwtAuth>{
    return this.http.post<JwtAuth>(`${environment.apiUrl}/${this.registerUrl}`,model);
  }
  public loginUser(model:LoginUser):Observable<JwtAuth>{
    return this.http.post<JwtAuth>(`${environment.apiUrl}/${this.loginUrl}`,model);
  }
}
