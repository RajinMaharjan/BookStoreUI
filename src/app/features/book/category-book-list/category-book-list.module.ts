import { RouterModule,Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CategoryBookListComponent } from "./category-book-list.component";
import { FormsModule } from "@angular/forms";

export const routes:Routes=[
    {path:'',component:CategoryBookListComponent}
];

@NgModule(
    {
        declarations:[CategoryBookListComponent],
        imports:[
            RouterModule.forChild(routes),
            CommonModule,
            FormsModule
        ]

    }
)
export class HomeBookListModule{}