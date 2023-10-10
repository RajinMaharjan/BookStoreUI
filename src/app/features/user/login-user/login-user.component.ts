import { Component, inject } from '@angular/core';
import { LoginUser } from '../models/login-user-request.model';
import { UserService } from '../services/user.service';
import { JwtAuth } from '../models/jwtAuth.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent {
  model:LoginUser;
  jwtToken = new JwtAuth();

  private readonly router = inject(Router)
  private readonly route = inject(ActivatedRoute)

  constructor(private userService:UserService){
    this.model = {
      email: '',
      password: ''
    };
  }


  login(){
    this.userService.loginUser(this.model)
    .subscribe((jwtToken) => {
      console.log(jwtToken.token);
      if(jwtToken.token!=null){
        localStorage.setItem('jwtToken', jwtToken.token);
        this.router.navigate(['/home']);
      }
      
    });
  }

  
}
