import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { ChartModule } from 'angular-highcharts';
import { SearchFormComponent } from "./components/header/search-form/search-form.component";
import { HttpClient, HttpClientModule, provideHttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HeaderComponent } from './components/header/header.component';
import { NavService } from './services/nav.service';
import { EventComponent } from './modules/modals/event/event.component';
import { ProductComponent } from './modules/modals/product/product.component';
import { StatusComponent } from "./components/status/status.component";
import { OrderComponent } from "./modules/modals/order/order.component";
import { UserCommentComponent } from "./components/user-comment/user-comment.component";
import { UserActionComponent } from './components/user-action/user-action.component';
import { BellComponent } from './components/bell/bell.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http)
}


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
    EventComponent,
    ProductComponent,
    OrderComponent,
    SearchFormComponent,
    HttpClientModule,
    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
        }
    }),
    StatusComponent,
    OrderComponent,
    UserCommentComponent,
    BellComponent,
],
  providers: [provideHttpClient(), NavService],
  bootstrap: [AppComponent]
})
export class AppModule { }
