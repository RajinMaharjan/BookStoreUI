import { RouterModule,Routes } from "@angular/router";
import { BookListComponent } from "./book-list.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

export const routes:Routes=[
    {path:'',component:BookListComponent}
];

@NgModule(
    {
        declarations:[BookListComponent],
        imports:[
            RouterModule.forChild(routes),
            CommonModule,
            FormsModule
        ]

    }
)
export class BookListModule{}