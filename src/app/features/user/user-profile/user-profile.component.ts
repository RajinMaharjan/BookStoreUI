import { Component ,OnInit} from '@angular/core';
import { UserModel } from '../models/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit{
model!:UserModel;
constructor(private userService:UserService){}
  ngOnInit(): void {
    
    this.model = this.userService.user;
  }


}
