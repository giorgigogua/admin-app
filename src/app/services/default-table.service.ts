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


  getFilteredData(searchByTitle: string = ''): Observable<any[]> {
    let params = new HttpParams();

    if (searchByTitle) {

      params = params.set('title', searchByTitle)
    }

    return this.httpClient.get<DefaultTableInterface[]>(this.apiUrl).pipe(
      map((data: any[]) => this.filterData(data, searchByTitle))
    );
  }

  private filterData(data: any[], searchByTitle: string): any[] {
    let filteredProducts = data;

    if (searchByTitle) {
      filteredProducts = filteredProducts.filter(data =>
        data.title.toLowerCase().includes(searchByTitle.toLowerCase())
      );
    }


    return filteredProducts;
  }

  //get data with filter end

  getData(status?: string): Observable<DefaultTableInterface[]> {
    let params = new HttpParams();
    if (status) {
      params = params.set('status', status);
    }
    return this.httpClient.get<DefaultTableInterface[]>(this.apiUrl, { params });
  }

  getStatuses(): Observable<string[]> {
    return this.httpClient.get<DefaultTableInterface[]>(this.apiUrl).pipe(
      map((items) => {

        const statuses = items.map(item => item.status);
        return [...new Set(statuses)];
      })
    );
  }


}
