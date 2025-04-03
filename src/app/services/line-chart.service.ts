import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class LineChartService {

  // apiUrl1 = "http://localhost:3000/homeLineChart"
  // apiUrl2 = "http://localhost:3000/profileLineChart"
  // apiUrl3 = "http://localhost:3000/contactLineChart"

  homeLineChart = [
    {
      "label": "Jan 01",
      "data": "75",
      "id": "e825"
    },
    {
      "label": "Jan 01",
      "data": "55",
      "id": "f66d"
    },
    {
      "label": "Jan 01",
      "data": "75",
      "id": "a840"
    },
    {
      "label": "Jan 01",
      "data": "20",
      "id": "913b"
    },
    {
      "label": "Jan 01",
      "data": "30",
      "id": "2896"
    },
    {
      "label": "Jan 01",
      "data": "30",
      "id": "2896"
    }
  ]

  profileLineChart = [
    {
      "label": "Jan 01",
      "data2": "75",
      "id": "e825"
    },
    {
      "label": "Jan 01",
      "data2": "55",
      "id": "f66d"
    },
    {
      "label": "Jan 01",
      "data2": "75",
      "id": "e825"
    },
    {
      "label": "Jan 01",
      "data2": "55",
      "id": "f66d"
    }
  ]

  contactLineChart = [
    {
      "label": "Jan 01",
      "data3": "75",
      "id": "e825"
    },
    {
      "label": "Jan 01",
      "data3": "55",
      "id": "f66d"
    },
    {
      "label": "Jan 01",
      "data3": "75",
      "id": "e825"
    },
    {
      "label": "Jan 01",
      "data3": "55",
      "id": "f66d"
    }
  ]



  constructor(private httpClient: HttpClient) { }

  getHomeLine(): Observable<any> {
    return of(this.homeLineChart)
  }
  getProfileLine(): Observable<any> {
    return of(this.profileLineChart)
  }
  getContactLine(): Observable<any> {
    return of(this.contactLineChart)
  }
}
