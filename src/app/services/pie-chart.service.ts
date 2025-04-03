import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class PieChartService {

  // apiUrl = "http://localhost:3000/pie"


  mockPieData = [
    {
      "data": "44",
      "id": "3f8f",
      "backgroundColor": "rgb(15, 105, 165)"
    },
    {
      "data": "55",
      "id": "01f7",
      "backgroundColor": "rgb(54, 162, 235)"
    },
    {
      "data": "300",
      "id": "e92c",
      "backgroundColor": "rgb(83, 159, 209)"
    },
    {
      "data": "300",
      "id": "e92c",
      "backgroundColor": "rgb(140, 197, 235)"
    }
  ]

  constructor(private httpClient: HttpClient) { }

  getPie(): Observable<any> {
    return of(this.mockPieData)
  }
}
