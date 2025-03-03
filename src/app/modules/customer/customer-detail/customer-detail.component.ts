import { Component } from '@angular/core';
import { GridListService } from '../../../services/grid-list.service';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  providers:[GridListService]
})
export class CustomerDetailComponent {

  gridListItem: any


  constructor(private gridListService: GridListService) {

    this.gridListService.getGridList().subscribe((data: any) => {
      this.gridListItem = data
    })

  }
}
