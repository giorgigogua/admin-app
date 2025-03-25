import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class GridListService {


  private gridListData = [
    {
      "name": "Earned",
      "price": "$1,250",
      "icon": "bi bi-credit-card-fill",
      "id": "1fb8"
    },
    {
      "name": "Hours logged",
      "price": "35.5 hrs",
      "icon": "bi bi-alarm-fill",
      "id": "2ead"
    },
    {
      "name": "Avg. time",
      "price": "2:55 hrs",
      "icon": "bi bi-reception-4",
      "id": "4634"
    },
    {
      "name": "Weekly growth",
      "price": "14.5%",
      "icon": "bi bi-percent",
      "id": "6124"
    }
  ]

  // apiUrl = "http://localhost:3000/gridList"


  constructor(private httpClient: HttpClient) {
    this.getGridList()
  }


  getGridList(): Observable<any> {
    return of(this.gridListData);
  }



}




