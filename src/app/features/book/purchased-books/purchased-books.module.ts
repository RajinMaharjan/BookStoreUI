import { RouterModule,Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PurchasedBooksComponent } from "./purchased-books.component";

export const routes:Routes=[
    {path:'',component:PurchasedBooksComponent}
];

@NgModule(
    {
        declarations:[PurchasedBooksComponent],
        imports:[
            RouterModule.forChild(routes),
            CommonModule
        ]

    }
)
export class PurchasedBooksModule{}