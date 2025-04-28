import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html'
})
export class AccountSettingsComponent {

  fileName: string | null = null;
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
      date: new FormControl("", [Validators.required]),
      image: new FormControl("", [Validators.required])

    })
  }


  onSubmit(){
    if(this.validationForm.invalid){
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
