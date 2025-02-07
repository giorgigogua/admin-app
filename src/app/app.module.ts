import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CommonModule } from '@angular/common';
import { ChartModule } from 'angular-highcharts';
import { SearchFormComponent } from "./components/header/search-form/search-form.component";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    ChartModule,
    SearchFormComponent
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
