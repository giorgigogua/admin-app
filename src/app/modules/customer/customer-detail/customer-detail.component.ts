import { Component } from '@angular/core';
import { GridListComponent } from '../../../components/grid-list/grid-list.component';
import { UserCardComponent } from '../../../components/user-card/user-card.component';
import { FilterBoxComponent } from '../../../components/filter-box/filter-box.component';
import { TableComponent } from '../../../components/table/table.component';
import { UploadTableComponent } from '../../../components/upload-table/upload-table.component';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrl: './customer-detail.component.scss',
})
export class CustomerDetailComponent {


  gridList: any = [
    {
      name: 'Earned',
      price: '$1250',
    },
    {
      name: 'Hours Logged',
      price: '35.5 hrs',
    },
    {
      name: 'Avg. time',
      price: '2:55 hrs',
    },
    {
      name: 'Weekly growth',
      price: '14.5%',
    },
  ]
}
