import { Component, OnInit } from '@angular/core';
import { DefaultTableService } from '../../../services/default-table.service';
import { DefaultTableInterface } from '../../../interfaces/default-table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrl: './new-project.component.scss',
  providers:[DefaultTableService]
})
export class NewProjectComponent {


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

  }





  postList() {
    this.tableService.postTableList(this.initialValue).subscribe({
      next:()=>{
        
      }
    })
  }



}
