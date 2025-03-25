import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CryptoTableInterface } from '../interfaces/crypto-table';

@Injectable()
export class CryptoService {


  private cryptoTableData = [
    {
      "id": "e56c",
      "name": "Bitcoin",
      "lastPrice": "63,879.81",
      "change": 0.53,
      "lastHour": "2323",
      "icon": "https://yevgenysim-turkey.github.io/dashbrd/assets/img/crypto/btc.svg"
    },
    {
      "id": "bc9a",
      "name": "Ethereum",
      "lastPrice": "2,642.53",
      "change": 1.84,
      "lastHour": "",
      "icon": "https://yevgenysim-turkey.github.io/dashbrd/assets/img/crypto/ethereum.svg"
    },
    {
      "id": "0f0e",
      "name": "Dogecoin",
      "lastPrice": "0.118413",
      "change": 1.06,
      "lastHour": "",
      "icon": "https://yevgenysim-turkey.github.io/dashbrd/assets/img/crypto/dogecoin.svg"
    },
    {
      "id": "d225",
      "name": "Tether",
      "lastPrice": "0.9999",
      "change": -0.02,
      "lastHour": "",
      "icon": "https://yevgenysim-turkey.github.io/dashbrd/assets/img/crypto/tether.svg"
    },
    {
      "id": "36e2",
      "name": "Cardano",
      "lastPrice": "0.3844",
      "change": -0.93,
      "lastHour": "",
      "icon": "https://yevgenysim-turkey.github.io/dashbrd/assets/img/crypto/cardano.svg"
    }
  ]


  // apiUrl = "http://localhost:3000/cryptoTable"

  constructor(private httpClient: HttpClient) { }

  getCryptoTableList(): Observable<any> {
    return of<CryptoTableInterface[]>(this.cryptoTableData)
  }

  // createCryptoTableList(data: CryptoTableInterface) {
  //   return this.httpClient.post(this.apiUrl, data)
  // }
}
