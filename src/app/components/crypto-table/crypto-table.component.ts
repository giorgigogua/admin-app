import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CryptoService } from '../../services/crypto.service';
import { CryptoTableInterface } from '../../interfaces/crypto-table';

@Component({
  selector: 'app-crypto-table',
  templateUrl: './crypto-table.component.html',
  standalone: true,
  imports: [CommonModule],
  providers:[CryptoService]
})
export class CryptoTableComponent implements OnInit {

  crypto: CryptoTableInterface[] = []

  constructor(private cryptoService: CryptoService) {

  }

  ngOnInit(): void {
    this.cryptoService.getCryptoTableList().subscribe((data) => {
      this.crypto = data
    })
  }





}
