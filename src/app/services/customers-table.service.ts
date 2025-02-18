import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomersTableService {

  apiUrl = "http://localhost:3000/customersTable"

  constructor(private httpClient: HttpClient) {

  }

  getAll(): Observable<any> {
    return this.httpClient.get(this.apiUrl)
  }
}
