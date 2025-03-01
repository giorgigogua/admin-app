import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class BarChartService {
  apiUrl = "http://localhost:3000/defaultBar"
  apiUrl1 = "http://localhost:3000/homeBar"
  apiUrl2 = "http://localhost:3000/profileBar"
  apiUrl3 = "http://localhost:3000/contactBar"


  constructor(private httpClient: HttpClient) {


  }

  getBarData(): Observable<any> {
    return this.httpClient.get(this.apiUrl)
  }


  getHomeBarData(): Observable<any> {
    return this.httpClient.get(this.apiUrl1)
  }
  getProfileBarData(): Observable<any> {
    return this.httpClient.get(this.apiUrl2)
  }
  getContactBarData(): Observable<any> {
    return this.httpClient.get(this.apiUrl3)
  }
}
