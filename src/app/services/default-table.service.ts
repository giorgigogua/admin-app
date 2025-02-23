import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DefaultTableInterface } from '../interfaces/default-table';

@Injectable({
  providedIn: 'root'
})
export class DefaultTableService {

  apiUrl = "http://localhost:3000/defaultTableList"

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<any> {
    return this.httpClient.get<DefaultTableInterface[]>(this.apiUrl);
  }

  postTableList(data: DefaultTableInterface) {
    return this.httpClient.post(this.apiUrl, data)
  }
}
