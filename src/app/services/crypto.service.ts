import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CryptoTableInterface } from '../interfaces/crypto-table';

@Injectable({
  providedIn: 'root'
})
export class CryptoService {

  apiUrl = "http://localhost:3000/cryptoTable"

  constructor(private httpClient: HttpClient) { }

  getCryptoTableList(): Observable<any> {
    return this.httpClient.get<CryptoTableInterface[]>(this.apiUrl)
  }

  createCryptoTableList(data: CryptoTableInterface) {
    return this.httpClient.post(this.apiUrl, data)
  }
}
