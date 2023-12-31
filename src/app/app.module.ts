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
import { ErrorComponent } from './core/error/error.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RegisterUserComponent,
    LoginUserComponent,
    HomeComponent,
    ErrorComponent
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
