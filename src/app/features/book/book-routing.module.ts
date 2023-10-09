import { Route } from "@angular/router";
import { BookListComponent } from "./book-list/book-list.component";
import { AddBookComponent } from "./add-book/add-book.component";
import { HomeBookListComponent } from "./home-book-list/home-book-list.component";
import { CategoryBookListComponent } from "./category-book-list/category-book-list.component";

export const routes:Route[] = [
    {path: '', redirectTo:'book-list',pathMatch:'full'},
    {path:'book-list', component:HomeBookListComponent},
    {path:'admin/book-list', component:BookListComponent},
    {path:'admin/add-book', component:AddBookComponent},
    {path:':category', component:CategoryBookListComponent}

]