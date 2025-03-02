import { Component } from '@angular/core';
import { PageTitleComponent } from '../../../components/page-title/page-title.component';
import { CustomersTableService } from '../../../services/customers-table.service';
import { CustomerTableInterface } from '../../../interfaces/customer-table';
import { DefaultTableInterface } from '../../../interfaces/default-table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-customer',
  templateUrl: './new-customer.component.html',
  styleUrl: './new-customer.component.scss',
  providers: [CustomersTableService]
})
export class NewCustomerComponent {


  initialValue: CustomerTableInterface = {
    userName: '',
    userMail: '',
    userPhone: '',
    userLocation: '',
    userImage: '',
    company: ''
  }

  constructor(private customersTableService: CustomersTableService, private router: Router) {

  }



  post() {
    this.customersTableService.postList(this.initialValue).subscribe({
      next: () => {
        this.router.navigate(["/customer/customers"])
      }
    })
  }

}
