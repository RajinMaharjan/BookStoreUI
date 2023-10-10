import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterUserComponent } from './features/user/register-user/register-user.component';
import { LoginUserComponent } from './features/user/login-user/login-user.component';
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
      },
      {
        path:'sort/price',
        loadChildren:()=>import('./features/book/book-list-sorted/book-list-sorted.module').then(x=>x.BookListSortedModule)
      },
      {
        path:'admin/user-list',
        loadChildren:()=>import('./features/user/user-list/user-list.module').then(x=>x.UserListModule)
      },
      {
        path:'user/profile',
        loadChildren:()=>import('./features/user/user-profile/user-profile.module').then(x=>x.UserProfileModule)
      },
      {
        path:'user/purchased-book', 
        loadChildren:()=>import('./features/book/purchased-books/purchased-books.module').then(x=>x.PurchasedBooksModule)
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
