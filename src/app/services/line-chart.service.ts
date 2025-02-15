import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LineChartService {

  apiUrl = "http://localhost:3000/line"

  constructor(private httpClient: HttpClient) { }

  getLineData(): Observable<any> {
    return this.httpClient.get(this.apiUrl)
  }
}
