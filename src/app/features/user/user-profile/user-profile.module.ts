import { RouterModule,Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UserProfileComponent } from "./user-profile.component";

export const routes:Routes=[
    {path:'',component:UserProfileComponent}
];

@NgModule(
    {
        declarations:[UserProfileComponent],
        imports:[
            RouterModule.forChild(routes),
            CommonModule
        ]

    }
)
export class UserProfileModule{}