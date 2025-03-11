import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DefaultTableInterface } from '../interfaces/default-table';
import { map } from 'rxjs/operators';

@Injectable()
export class DefaultTableService {

  apiUrl = "http://localhost:3000/defaultTableList"

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<any> {
    return this.httpClient.get<DefaultTableInterface[]>(this.apiUrl);
  }

  postTableList(data: DefaultTableInterface) {
    return this.httpClient.post(this.apiUrl, data)
  }



  // get data with filter


  getFilteredProducts(searchByTitle: string = ''): Observable<any[]> {
    let params = new HttpParams();

    if (searchByTitle) {

      params = params.set('title', searchByTitle)
    }

    return this.httpClient.get<DefaultTableInterface[]>(this.apiUrl).pipe(
      map((products: any[]) => this.filterProducts(products, searchByTitle))
    );
  }

  private filterProducts(products: any[], searchByTitle: string,): any[] {
    let filteredProducts = products;

    if (searchByTitle) {
      filteredProducts = filteredProducts.filter(product =>
        product.title.toLowerCase().includes(searchByTitle.toLowerCase())
      );
    }


    return filteredProducts;
  }

  //get data with filter end
}
