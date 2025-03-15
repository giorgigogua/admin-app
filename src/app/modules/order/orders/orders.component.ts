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
  selectedStatus: string = ''

  filterData: string = '';
  searchControl: FormControl = new FormControl('');

  statuses: any

  ngOnInit(): void {
    this.searchControl.valueChanges.pipe(
      switchMap((filterData) => this.customerDetailsService.getFilteredProducts(filterData))
    ).subscribe((data) => {
      this.customerDetailList = data;
    });

    this.customerDetailsService.getProductStatuses().subscribe((statuses: string[]) => {
      this.statuses = statuses;
    });
  }

  onStatusChange(status: string): void {
    this.selectedStatus = status;
    this.fetchItems();
  }

  private fetchItems(): void {
    this.customerDetailsService.getProducts(this.selectedStatus).subscribe((data: any[]) => {
      this.customerDetailList = data;
    });
  }

}
