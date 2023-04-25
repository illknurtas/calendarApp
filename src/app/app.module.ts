import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import {ToastrModule} from "ngx-toastr";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { WeekComponent } from './week/week.component';

import { PrimengModule } from '../primeng.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    WeekComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PrimengModule,
    HttpClientModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
