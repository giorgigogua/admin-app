import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html'
})
export class AccountSettingsComponent {


  validationForm: FormGroup


  constructor() {

    this.validationForm = new FormGroup({
      fullName: new FormControl("", [Validators.required]),
      company: new FormControl("", [Validators.required]),
      email: new FormControl("", [Validators.required, Validators.email]),
      phone: new FormControl("", [Validators.required, Validators.minLength(9), Validators.maxLength(9)]),
      bio: new FormControl("", [Validators.required]),
      card: new FormControl("", [Validators.required]),
      CV: new FormControl("", [Validators.required]),
      date: new FormControl("", [Validators.required])

    })
  }


}
