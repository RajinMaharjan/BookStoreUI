import { inject } from "@angular/core"
import { Router } from "@angular/router"
import { UserService } from "./user.service";

export const authGuard = () => {

    const router = inject(Router);  
    const userService = inject(UserService);  
    if (userService.isAuthenticated()) {  
      return true;  
    }  
    return router.navigate(['login']);  
  };
    
  export const isLoggedIn = () => {
    const userService = inject(UserService);  
    const router = inject(Router);  
    if (userService.isAuthenticated()) {  
      return router.navigate(['home']);  
    }  
    return true;  
  };