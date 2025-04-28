import { Component } from '@angular/core';
import { CustomersTableService } from '../../../services/customers-table.service';
import { CustomerTableInterface } from '../../../interfaces/customer-table';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-customer',
  templateUrl: './new-customer.component.html',
  providers: [CustomersTableService]
})
export class NewCustomerComponent {


  validationForm: FormGroup

  fileName: string | null = null;



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
      image: new FormControl("", [Validators.required]),
      name: new FormControl("", [Validators.required]),
      mail: new FormControl("", [Validators.required, Validators.email]),
      company: new FormControl("", [Validators.required]),
      phone: new FormControl("", [Validators.required, Validators.minLength(9), Validators.maxLength(9)]),
      location: new FormControl("", [Validators.required])

    })
  }



  onSubmit() {
    if (this.validationForm.invalid) {
      this.validationForm.markAllAsTouched()
      return
    }
  }


  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.fileName = input.files[0].name;
    } else {
      this.fileName = null;
    }
  }

}
