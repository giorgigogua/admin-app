import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable()
export class ProductListService {

  apiUrl = "http://localhost:3000/productList"


  constructor(private httpClient: HttpClient) { }

  private productList = [
    {
      "name": "Mackbook",
      "category": "Electronics",
      "price": "$99.99",
      "stock": "Out of Stock",
      "rating": 1,
      "img": "https://yevgenysim-turkey.github.io/dashbrd/assets/img/products/smart-watch.jpg"
    },
    {
      "name": "Wireless Headphones",
      "category": "Electronics",
      "price": "$99.99",
      "stock": "In Stock",
      "rating": 3,
      "img": "https://yevgenysim-turkey.github.io/dashbrd/assets/img/products/smart-watch.jpg"
    },
    {
      "name": "Watch",
      "category": "Electronics",
      "price": "$99.99",
      "stock": "Out of Stock",
      "rating": 5,
      "img": "https://yevgenysim-turkey.github.io/dashbrd/assets/img/products/smart-watch.jpg"
    }
  ]


  getAll(): Observable<any> {
    return of(this.productList)
  }


  //GET FILTERED USER START

  getFilteredProduct(searchByTitle: string = ''): Observable<any[]> {
    let params = new HttpParams();

    if (searchByTitle) {

      params = params.set('name', searchByTitle)
    }

    return this.httpClient.get<any[]>(this.apiUrl).pipe(
      map((data: any[]) => this.filterProuct(data, searchByTitle))
    );
  }

  private filterProuct(data: any[], searchByTitle: string): any[] {
    let filteredProducts = data;

    if (searchByTitle) {
      filteredProducts = filteredProducts.filter(data =>
        data.name.toLowerCase().includes(searchByTitle.toLowerCase())
      );
    }


    return filteredProducts;
  }


  //GET FILTERED USER END

  getProduct(status: string): Observable<any[]> {

    return of(this.productList).pipe(
      map(items => {
        if (status === 'All') {
          return this.productList;
        }
        return items.filter(item => item.stock === status);
      })
    );
  }

  getStatuses(): Observable<string[]> {
    const statuses = Array.from(new Set(this.productList.map(item => item.stock)));
    return of(['All', ...statuses]);
  }
}
