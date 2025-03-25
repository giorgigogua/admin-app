import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CustomerTableInterface } from '../interfaces/customer-table';
import { map } from 'rxjs/operators';


@Injectable()
export class CustomersTableService {

  private customersTableData = [
    {
      "id": "36a2",
      "userName": "John Williams",
      "userMail": "james.smith@example.com",
      "userPhone": "(202) 555-0126",
      "userLocation": "San Francisco, CA",
      "userImage": "https://yevgenysim-turkey.github.io/dashbrd/assets/img/photos/photo-6.jpg",
      "company": "TechPinnacle Solutions"
    },
    {
      "id": "36a23",
      "userName": "Nick Williams",
      "userMail": "james.smith@example.com",
      "userPhone": "(202) 555-0126",
      "userLocation": "San Francisco, CA",
      "userImage": "https://yevgenysim-turkey.github.io/dashbrd/assets/img/photos/photo-6.jpg",
      "company": "TechPinnacle Solutions"
    }
  ]

  apiUrl = "http://localhost:3000/customersTable"

  constructor(private httpClient: HttpClient) {

  }

  getAll(): Observable<any> {
    return of<CustomerTableInterface[]>(this.customersTableData)
  }

  // postList(data: CustomerTableInterface) {
  //   return this.httpClient.post(this.apiUrl, data)

  // }

  //GET FILTERED USER START

  getFilteredUser(searchByUserName: string = ''): Observable<any[]> {
    let params = new HttpParams();

    if (searchByUserName) {

      params = params.set('userName', searchByUserName)
    }

    return this.httpClient.get<CustomerTableInterface[]>(this.apiUrl).pipe(
      map((data: any[]) => this.filterUser(data, searchByUserName))
    );
  }

  private filterUser(data: any[], searchByUserName: string): any[] {
    let filteredProducts = data;

    if (searchByUserName) {
      filteredProducts = filteredProducts.filter(data =>
        data.userName.toLowerCase().includes(searchByUserName.toLowerCase())
      );
    }


    return filteredProducts;
  }

  //GET FILTERED USER END


}