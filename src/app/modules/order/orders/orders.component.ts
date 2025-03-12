import { Component, OnInit } from '@angular/core';
import { CustomerDetailsTableService } from '../../../services/customer-details-table.service';
import { FormControl } from '@angular/forms';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  providers: [CustomerDetailsTableService]
})
export class OrdersComponent implements OnInit {

  constructor(private customerDetailsService: CustomerDetailsTableService) {

  }

  customerDetailList: any[] = []


  filterData: string = '';
  searchControl: FormControl = new FormControl('');

  ngOnInit(): void {
    this.searchControl.valueChanges.pipe(
      switchMap((filterData) => this.customerDetailsService.getFilteredProducts(filterData))
    ).subscribe((data) => {
      this.customerDetailList = data;
    });
  }

}
