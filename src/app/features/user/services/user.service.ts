import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { RegisterUser } from '../models/register-user-request.model';
import { LoginUser } from '../models/login-user-request.model';
import { environment } from 'src/environments/environment';
import { JwtAuth } from '../models/jwtAuth.model';
import { JwtHelperService } from '@auth0/angular-jwt';
import { UserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http:HttpClient) { }
  user:UserModel = {
    id: '',
    email:'',
    firstName:'',
    lastName:'',
    phoneNumber:'',
    role:'',
  }

  setUserData(){
    const helper = new JwtHelperService();
    const token = localStorage.getItem('jwtToken');
    const decodedToken = helper.decodeToken(token!);

    this.user.id = decodedToken['Id']
    this.user.email = decodedToken['email'];
    this.user.firstName = decodedToken['name'];
    this.user.lastName = decodedToken['LastName'];
    this.user.phoneNumber = decodedToken['PhoneNumber'];
    this.user.role = String(decodedToken['role']);    
  }
  
  isAuthenticated(){
    const token = localStorage.getItem('jwtToken');
    console.log(token);
    return token==undefined||null||""?false:true;
  }

  logout = ()=>{
    localStorage.removeItem('jwtToken');
  }

  public registerUser(model:RegisterUser):Observable<JwtAuth>{
    return this.http.post<JwtAuth>(`${environment.userApiUrl}/register`,model);
  }
  public loginUser(model:LoginUser):Observable<JwtAuth>{
    return this.http.post<JwtAuth>(`${environment.userApiUrl}/login`,model);
  }

  getAllUser():Observable<any>{
    return this.http.get(`${environment.userApiUrl}/getAllUsers`);
  }
  deleteUser(id:string):Observable<void>{
    return this.http.delete<void>(`${environment.userApiUrl}/deleteUser/${id}`);
  }
}
