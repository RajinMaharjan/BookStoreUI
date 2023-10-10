import { Route } from "@angular/router";
import { UserListComponent } from "./user-list/user-list.component";
import { UserProfileComponent } from "./user-profile/user-profile.component";

export const routes:Route[] = [
    {path:'admin/user-list', component:UserListComponent},
    {path:'user/profile',component:UserProfileComponent}

]