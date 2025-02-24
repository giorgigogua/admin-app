import { CommonModule, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { booleanAttribute, Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CustomersTableService } from '../../services/customers-table.service';
import { CustomerDetailsTableService } from '../../services/customer-details-table.service';
import { CustomerTableInterface } from '../../interfaces/customer-table';
import { FormsModule } from '@angular/forms';
import { setThrowInvalidWriteToSignalError } from '@angular/core/primitives/signals';

@Component({
  selector: 'app-customers-table',
  templateUrl: './customers-table.component.html',
  styleUrl: './customers-table.component.scss',
  standalone: true,
  imports: [CommonModule, TranslateModule, FormsModule],
  providers:[CustomersTableService, CustomerDetailsTableService]
})
export class CustomersTableComponent {
  @Input({ transform: booleanAttribute }) thead: boolean = true
  @Input({ transform: booleanAttribute }) tbody: boolean = true

  @Input({ transform: booleanAttribute }) theadTwo: boolean = false
  @Input({ transform: booleanAttribute }) tbodyTwo: boolean = false

  isChecked = false

  customerTableList: any[] = []

  customerDetailsList: any



  deleteUser(id: string) {

    return this.httpClient.delete(`http://localhost:3000/customersTable/${id}`).subscribe(
      {
        next: () => {
          this.customerDetailsList = this.customerTableList.filter(_ => _.id != id)
          window.location.reload();
        }
      }
    )

  }


  constructor(private customersTableService: CustomersTableService, private customerDetailsService: CustomerDetailsTableService, private httpClient: HttpClient) {

    this.customersTableService.getAll().subscribe((data) => {

      this.customerTableList = data

    })

    this.customerDetailsService.getAll().subscribe((data) => {

      this.customerDetailsList = data

    })

  }


}
