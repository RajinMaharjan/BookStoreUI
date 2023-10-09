import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './features/book/book-list/book-list.component';
import { AddBookComponent } from './features/book/add-book/add-book.component';
import { RegisterUserComponent } from './features/user/register-user/register-user.component';
import { LoginUserComponent } from './features/user/login-user/login-user.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path:'',
    component:LoginUserComponent
  },
  {
    path:'admin/books',
    component: BookListComponent
  },
  {
    path:'admin/books/add',
    component: AddBookComponent
  },
  {
    path:'register',
    component: RegisterUserComponent
  },
  {
    path:'login',
    component: LoginUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
