import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()

export class CryptoListService {

  private cryptoListServiceData = [
    {
      "name": "Bought 1.5 BTC",
      "date": "Oct 1",
      "activity": "Transaction completed on Coinbase",
      "icon": "bi bi-cart-fill",
      "id": "376e"
    },
    {
      "name": "Sold 0.75 ETH",
      "date": "Sep 30",
      "activity": "Sale processed through Binance",
      "icon": "bi bi-wallet-fill",
      "id": "4a13"
    },
    {
      "name": "Transferred 2.3 LTC to Wallet",
      "date": "Sep 30",
      "activity": "Funds moved to external wallet",
      "icon": "bi bi-credit-card-2-back-fill",
      "id": "a6ee"
    },
    {
      "name": "Received 0.4 BTC",
      "date": "Sep 29",
      "activity": "Received from peer-to-peer transaction",
      "icon": "bi bi-arrow-down-left",
      "id": "d939"
    },
    {
      "name": "Staked 50 ADA",
      "date": "Sep 28",
      "activity": "Staking initiated on Cardano blockchain",
      "icon": "bi bi-currency-exchange",
      "id": "67db"
    }
  ]

  // apiUrl = "http://localhost:3000/cryptoList"

  constructor(private httpClient: HttpClient) { }

  getCryptoList(): Observable<any> {
    return of(this.cryptoListServiceData)
  }

}
