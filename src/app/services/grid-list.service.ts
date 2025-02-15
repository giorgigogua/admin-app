import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GridListService {




  apiUrl = "http://localhost:3000/gridList"


  constructor(private httpClient: HttpClient) {
    this.getGridList()
  }


  getGridList(): Observable<any> {
    return this.httpClient.get(this.apiUrl);

  }



}




