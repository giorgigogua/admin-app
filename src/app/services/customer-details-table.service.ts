import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable()
export class CustomerDetailsTableService {

  private customerDetailsData = [
    {
      "id": "3422",
      "product": "Apple MacBook Pro",
      "date": "2021-08-12",
      "status": "Completed",
      "price": "32233"
    },
    {
      "id": "3421",
      "product": "Apple iPhone 12 Pro",
      "date": "2021-08-11",
      "status": "Pending",
      "price": "32233"
    },
    {
      "id": "3421",
      "product": "Apple AirPods Pro",
      "date": "2021-08-10",
      "status": "Cancelled",
      "price": "32233"
    },
    {
      "id": "3421",
      "product": "Apple Watch Series 6",
      "date": "2021-08-09",
      "status": "Completed",
      "price": "32233"
    },
    {
      "id": "3421",
      "product": "Apple iPad Pro",
      "date": "2021-08-08",
      "status": "Completed",
      "price": "32233"
    },
    {
      "id": "3421",
      "product": "Apple MacBook Air",
      "date": "2021-08-07",
      "status": "Cancelled",
      "price": "32233"
    },
    {
      "id": "3421",
      "product": "Apple macbook",
      "date": "2021-08-07",
      "status": "Cancelled",
      "price": "32233"
    },
    {
      "id": "3421",
      "product": "Apple HomePod Mini",
      "date": "2021-08-06",
      "status": "Pending",
      "price": "32233"
    },
    {
      "id": "3421",
      "product": "Apple Magic Keyboard",
      "date": "2021-08-05",
      "status": "Completed",
      "price": "32233"
    },
    {
      "id": "3421",
      "product": "Apple Magic Mouse",
      "date": "2021-08-04",
      "status": "Cancelled",
      "price": "32233"
    }
  ]

  apiUrl = "http://localhost:3000/customerDetails"

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<any> {
    return of(this.customerDetailsData)
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

  getProducts(status: string): Observable<any[]> {

    return of(this.customerDetailsData
    ).pipe(
      map(items => {
        if (status === 'All') {
          return this.customerDetailsData;
        }
        return items.filter(item => item.status === status);
      })
    );
  }

  getProductStatuses(): Observable<string[]> {
    const statuses = Array.from(new Set(this.customerDetailsData.map(item => item.status)));
    return of(['All', ...statuses]);
  }
}
