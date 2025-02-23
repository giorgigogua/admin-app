import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerTableInterface } from '../interfaces/customer-table';

@Injectable({
  providedIn: 'root'
})
export class CustomersTableService {

  apiUrl = "http://localhost:3000/customersTable"

  constructor(private httpClient: HttpClient) {

  }

  getAll(): Observable<any> {
    return this.httpClient.get<CustomerTableInterface[]>(this.apiUrl)
  }

  postList(data: CustomerTableInterface) {
    return this.httpClient.post(this.apiUrl, data)

  }

  delete(id: string) {
    return this.httpClient.delete<CustomerTableInterface>(`http://localhost:3000/customersTable${id}`)
  }
}
