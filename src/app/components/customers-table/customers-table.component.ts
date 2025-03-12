import { CommonModule, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { booleanAttribute, Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CustomersTableService } from '../../services/customers-table.service';
import { CustomerDetailsTableService } from '../../services/customer-details-table.service';
import { FormsModule } from '@angular/forms';
import { StatusComponent } from "../status/status.component";

@Component({
  selector: 'app-customers-table',
  templateUrl: './customers-table.component.html',
  standalone: true,
  imports: [CommonModule, TranslateModule, FormsModule, StatusComponent],
  providers: [CustomersTableService, CustomerDetailsTableService]
})
export class CustomersTableComponent {
  @Input({ transform: booleanAttribute }) thead: boolean = true
  @Input({ transform: booleanAttribute }) tbody: boolean = true

  @Input({ transform: booleanAttribute }) theadTwo: boolean = false
  @Input({ transform: booleanAttribute }) tbodyTwo: boolean = false

  isChecked = false

  @Input() customerTableList: any[] = []

  @Input() customerDetailsList: any




  constructor(private customersTableService: CustomersTableService, private customerDetailsService: CustomerDetailsTableService, private httpClient: HttpClient) {

    this.customersTableService.getAll().subscribe((data) => {

      this.customerTableList = data

    })

    this.customerDetailsService.getAll().subscribe((data) => {

      this.customerDetailsList = data

    })

  }


}
