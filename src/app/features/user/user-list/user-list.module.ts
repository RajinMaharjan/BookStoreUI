import { RouterModule,Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UserListComponent } from "./user-list.component";

export const routes:Routes=[
    {path:'',component:UserListComponent}
];

@NgModule(
    {
        declarations:[UserListComponent],
        imports:[
            RouterModule.forChild(routes),
            CommonModule
        ]

    }
)
export class UserListModule{}