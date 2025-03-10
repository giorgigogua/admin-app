import { Component, OnInit } from '@angular/core';
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
      team: new FormControl("", [Validators.required])

    })
  }







  postList() {
    this.tableService.postTableList(this.initialValue).subscribe({
      next: () => {
        this.router.navigate(["/project/projects"])
      }
    })
  }



}
