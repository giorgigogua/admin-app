import { Component, OnInit } from '@angular/core';
import { CustomersTableService } from '../../../services/customers-table.service';
import { FormControl } from '@angular/forms';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  providers: [CustomersTableService]
})
export class CustomersComponent implements OnInit {


  customerServiceData: any[] = []
  filteredData: string = ''
  searchControl: FormControl = new FormControl('')

  constructor(private customerTableService: CustomersTableService) {

  }


  ngOnInit(): void {
    this.searchControl.valueChanges.pipe(
      switchMap((filteredData) => this.customerTableService.getFilteredUser(filteredData))
    ).subscribe((data) => {
      this.customerServiceData = data;
    });
  }



}
