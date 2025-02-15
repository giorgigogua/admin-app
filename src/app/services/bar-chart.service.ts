import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BarChartService {

  apiUrl = "http://localhost:3000/bar"

  constructor(private httpClient: HttpClient) {


  }


  getBarData(): Observable<any> {
    return this.httpClient.get(this.apiUrl)
  }
}
