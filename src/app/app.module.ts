import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { BookListComponent } from './features/book/book-list/book-list.component';
import { AddBookComponent } from './features/book/add-book/add-book.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { RegisterUserComponent } from './features/user/register-user/register-user.component';
import { LoginUserComponent } from './features/user/login-user/login-user.component';
import { UserInterceptor } from './features/user/services/interceptor';
import { DatePipe } from '@angular/common';
import { HomeComponent } from './core/home/home.component';
import { BookListModule } from './features/book/book-list/book-list.module';
import { HomeBookListComponent } from './features/book/home-book-list/home-book-list.component';
import { CategoryBookListComponent } from './features/book/category-book-list/category-book-list.component';
import { BookListSortedComponent } from './features/book/book-list-sorted/book-list-sorted.component';
import { UserProfileComponent } from './features/user/user-profile/user-profile.component';
import { PurchasedBooksComponent } from './features/book/purchased-books/purchased-books.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RegisterUserComponent,
    LoginUserComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    DatePipe,
    ReactiveFormsModule,
    BookListModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: UserInterceptor,
    multi: true
  },
DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
