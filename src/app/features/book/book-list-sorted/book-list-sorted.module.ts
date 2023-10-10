import { RouterModule,Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { BookListSortedComponent } from "./book-list-sorted.component";

export const routes:Routes=[
    {path:'',component:BookListSortedComponent}
];

@NgModule(
    {
        declarations:[BookListSortedComponent],
        imports:[
            RouterModule.forChild(routes),
            CommonModule,
            FormsModule
        ]

    }
)
export class BookListSortedModule{}