import { Component } from '@angular/core';
import { DefaultTableService } from '../../../services/default-table.service';
import { DefaultTableInterface } from '../../../interfaces/default-table';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  providers: [DefaultTableService]
})
export class NewProjectComponent {

  validationForm: FormGroup
  fileName: string | null = null;



  initialValue: DefaultTableInterface = {
    image: '',
    description: '',
    title: '',
    status: '',
    authorImage: '',
    authorName: '',
    teamImage: ''

  }


  constructor(private tableService: DefaultTableService, private router: Router) {

    this.validationForm = new FormGroup({
      title: new FormControl("", [Validators.required]),
      desc: new FormControl("", [Validators.required]),
      startDate: new FormControl("", [Validators.required]),
      endDate: new FormControl("", [Validators.required]),
      teamTitle: new FormControl("", [Validators.required]),
      team: new FormControl("", [Validators.required]),
      image: new FormControl("", [Validators.required])
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
