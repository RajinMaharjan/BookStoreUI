import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './features/book/book-list/book-list.component';
import { AddBookComponent } from './features/book/add-book/add-book.component';
import { RegisterUserComponent } from './features/user/register-user/register-user.component';
import { LoginUserComponent } from './features/user/login-user/login-user.component';
import { AppComponent } from './app.component';
import { authGuard,isLoggedIn } from './features/user/services/user.guard';
import { HomeComponent } from './core/home/home.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/login',
    pathMatch:'full'
    
  },
  {
    path:'home',
    component:HomeComponent,
    canActivate:[authGuard],
    children:[
      {
        path:'',
        loadChildren:()=>import('./features/book/home-book-list/home-book-list.module').then(x=>x.HomeBookListModule)
      },
      {
        path:'admin/book-list',
        loadChildren:()=>import('./features/book/book-list/book-list.module').then(x=>x.BookListModule)
      },
      {
        path:'admin/add-book',
        loadChildren:()=>import('./features/book/add-book/add-book.module').then(x=>x.AddBookModule)
      },
      {
        path:':category',
        loadChildren:()=>import('./features/book/category-book-list/category-book-list.module').then(x=>x.HomeBookListModule)
      }
    ]
  },
  {
    path:'register',
    component: RegisterUserComponent,
    canActivate: [isLoggedIn],
  },
  {
    path:'login',
    component: LoginUserComponent,
    canActivate: [isLoggedIn],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
