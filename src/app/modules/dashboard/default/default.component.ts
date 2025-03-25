
import { Component } from '@angular/core';
import { GridListService } from '../../../services/grid-list.service';
import { RecentActivityService } from '../../../services/recent-activity.service';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  providers: [GridListService, RecentActivityService]
})
export class DefaultComponent {

  gridListItem: any
  cryptoListItem: any

  constructor(private gridListService: GridListService, private recentActivityService: RecentActivityService) {


    this.gridListService.getGridList().subscribe((data: any) => {
      this.gridListItem = data
    })

    this.recentActivityService.getCryptoList().subscribe((data: any) => {

      this.cryptoListItem = data

    })

  }



}
