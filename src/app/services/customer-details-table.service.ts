import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable()
export class CustomerDetailsTableService {

  apiUrl = "http://localhost:3000/customerDetails"

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<any> {
    return this.httpClient.get(this.apiUrl)
  }


  // get products with filter


  getFilteredProducts(product: string = ''): Observable<any[]> {
    let params = new HttpParams();

    if (product) {

      params = params.set('product', product)
    }

    return this.httpClient.get<any>(this.apiUrl).pipe(
      map((data: any[]) => this.filterProducts(data, product))
    );
  }

  private filterProducts(data: any[], product: string): any[] {
    let filteredProducts = data;

    if (product) {
      filteredProducts = filteredProducts.filter(data =>
        data.product.toLowerCase().includes(product.toLowerCase())
      );
    }


    return filteredProducts;
  }

  //get products with filter end
}
