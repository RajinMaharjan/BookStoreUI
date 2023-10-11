import { Component, OnDestroy, inject } from '@angular/core';
import { RegisterUser } from '../models/register-user-request.model';
import { UserService } from '../services/user.service';
import { Subscription } from 'rxjs/internal/Subscription';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnDestroy{
  model:RegisterUser;
  private registerUserSubscription?: Subscription;
  private readonly router = inject(Router)
  private readonly route = inject(ActivatedRoute)

  constructor(private userService:UserService){
    this.model = {
      firstName:'',
      lastName:'',
      email: '',
      password: '',
      confirmPassword: '',
      phoneNumber: ''
    }
  }
  


  register(){
    this.registerUserSubscription = this.userService.registerUser(this.model)
    .subscribe({
      next: (response) => {
        console.log("Account Created");
        this.router.navigate(['/login']);

      },
      error: (error)=>{
        if(error.error.status == "Error"){
          alert(error.error.message);
        }
      }
    });
  }
  ngOnDestroy(): void {
    this.registerUserSubscription?.unsubscribe();
  }
}
