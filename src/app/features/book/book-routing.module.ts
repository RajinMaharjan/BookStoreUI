import { Route } from "@angular/router";
import { BookListComponent } from "./book-list/book-list.component";
import { AddBookComponent } from "./add-book/add-book.component";
import { HomeBookListComponent } from "./home-book-list/home-book-list.component";
import { CategoryBookListComponent } from "./category-book-list/category-book-list.component";
import { BookListSortedComponent } from "./book-list-sorted/book-list-sorted.component";
import { PurchasedBooksComponent } from "./purchased-books/purchased-books.component";

export const routes:Route[] = [
    {path: '', redirectTo:'book-list',pathMatch:'full'},
    {path:'book-list', component:HomeBookListComponent},
    {path:'admin/book-list', component:BookListComponent},
    {path:'admin/add-book', component:AddBookComponent},
    {path:':category', component:CategoryBookListComponent},
    {path:'sort/price',component:BookListSortedComponent},
    {path:'user/purchased-book', component:PurchasedBooksComponent}

]