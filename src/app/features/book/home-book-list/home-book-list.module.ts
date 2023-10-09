import { RouterModule,Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeBookListComponent } from "./home-book-list.component";

export const routes:Routes=[
    {path:'',component:HomeBookListComponent}
];

@NgModule(
    {
        declarations:[HomeBookListComponent],
        imports:[
            RouterModule.forChild(routes),
            CommonModule
        ]

    }
)
export class HomeBookListModule{}