import { Component } from '@angular/core';
import { CustomersTableService } from '../../../services/customers-table.service';
import { CustomerTableInterface } from '../../../interfaces/customer-table';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-customer',
  templateUrl: './new-customer.component.html',
  styleUrl: './new-customer.component.scss',
  providers: [CustomersTableService]
})
export class NewCustomerComponent {


  validationForm: FormGroup



  initialValue: CustomerTableInterface = {
    userName: '',
    userMail: '',
    userPhone: '',
    userLocation: '',
    userImage: '',
    company: ''
  }

  constructor(private customersTableService: CustomersTableService, private router: Router) {

    this.validationForm = new FormGroup({
      name: new FormControl("", [Validators.required]),
      mail: new FormControl("", [Validators.required]),
      company: new FormControl("", [Validators.required]),
      phone: new FormControl(0, [Validators.required, Validators.minLength(9), Validators.maxLength(9)]),
      location: new FormControl("", [Validators.required])

    })
  }



  post() {
    if (this.validationForm.valid) {
      this.customersTableService.postList(this.initialValue).subscribe({
        next: () => {
          this.router.navigate(["/customer/customers"])
        }
      })
    }
  }

}
