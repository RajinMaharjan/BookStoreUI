import { Component } from '@angular/core';
import { UserModel } from '../models/user.model';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  userList:UserModel[] = [];
  selectedIndex:number=0;
  
  constructor(private userService:UserService, private router:Router){}

  ngOnInit(): void {
    this.loadUser();
  } 

  loadUser(){
    this.userService.getAllUser().subscribe((userData:any) => {
      this.userList = userData.users;
      console.log(userData);
    });
  }
  
  // For Deleting Book
  onDelete(index:number){
    this.selectedIndex = index;
  }

  onDeleteUser(){
    this.deleteDserData(this.userList[this.selectedIndex].id)
  }
  
  deleteDserData(id:string){
    this.userService.deleteUser(id)
    .subscribe({
      next: (response) => {
        console.log("Deleted",response);
        this.redirectTo('/home/admin/user-list');
        
      },
      error: (error) => {
        console.log("Error occured",error);
      }
    });
  }

  //To refresh page
  redirectTo(uri: string) {

    this.router

      .navigateByUrl('/', { skipLocationChange: true })

      .then(() => this.router.navigate([uri]));

  }

}
