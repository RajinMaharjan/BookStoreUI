import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/features/user/services/user.service';
import { UserModel } from 'src/app/features/user/models/user.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  constructor(private userService:UserService, private router:Router){}
  categoryArray = ["Fiction","Non-fiction","Mystery","Fantasy","Romance"]
  userData:UserModel = {
    id: '',
    email:'',
    firstName:'',
    lastName:'',
    phoneNumber:'',
    role:'',
  }
  
  ngOnInit(): void {   
    this.userService.setUserData();
    console.log("Object of user is ",this.userService.user);
    this.initializeUser(this.userService.user);
  }

  checkRole(){
    return this.userService.user.role == "Admin"?false:true;
  }

  initializeUser(data:UserModel){
    this.userData = data;
  }
  
  routeCategoryPage(index:number){
    this.router.navigate([`/home/${this.categoryArray[index]}`])
    this.redirectTo(`/home/${this.categoryArray[index]}`);
    console.log("Category is ",this.categoryArray[index]);
  }


  logout(){
    this.userService.logout();
    this.router.navigate(['login']);
  }

  redirectTo(uri: string) {

    this.router

      .navigateByUrl('/', { skipLocationChange: true })

      .then(() => this.router.navigate([uri]));

  }
  
}
