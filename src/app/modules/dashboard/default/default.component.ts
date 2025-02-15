
import { Component } from '@angular/core';
import { GridListService } from '../../../services/grid-list.service';
import { CryptoListService } from '../../../services/crypto-list.service';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrl: './default.component.scss',
})
export class DefaultComponent {

  gridListItem: any
  cryptoListItem: any

  constructor(private gridListService: GridListService, private cryptoListService: CryptoListService) {

    this.gridListService.getGridList().subscribe((data: any) => {
      this.gridListItem = data
    })

    this.cryptoListService.getCryptoList().subscribe((data: any) => {

      this.cryptoListItem = data

    })

  }


}
