import { Component } from '@angular/core';
import { UserService } from './features/user/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BookStoreUI';
  constructor (public userService:UserService){}
  
}
