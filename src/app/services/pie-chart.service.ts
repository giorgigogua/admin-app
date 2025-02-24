import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class PieChartService {

  apiUrl = "http://localhost:3000/pie"

  constructor(private httpClient: HttpClient) { }

  getPie(): Observable<any> {
    return this.httpClient.get(this.apiUrl)
  }
}
