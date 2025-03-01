import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class LineChartService {

  apiUrl1 = "http://localhost:3000/homeLineChart"
  apiUrl2 = "http://localhost:3000/profileLineChart"
  apiUrl3 = "http://localhost:3000/contactLineChart"


  constructor(private httpClient: HttpClient) { }

  getHomeLine(): Observable<any> {
    return this.httpClient.get(this.apiUrl1)
  }
  getProfileLine(): Observable<any> {
    return this.httpClient.get(this.apiUrl2)
  }
  getContactLine(): Observable<any> {
    return this.httpClient.get(this.apiUrl3)
  }
}
