import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CryptoListService {

  apiUrl = "http://localhost:3000/cryptoList"

  constructor(private httpClient: HttpClient) { }

  getCryptoList(): Observable<any> {
    return this.httpClient.get(this.apiUrl);
  }
}
