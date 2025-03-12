import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { switchMap } from 'rxjs';
import { DefaultTableService } from '../../../services/default-table.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  providers: [DefaultTableService]
})
export class ProjectsComponent implements OnInit {

  constructor(private defaultTableService: DefaultTableService) {

  }

  defaultTableList: any[] = []


  filterData: string = '';
  searchControl: FormControl = new FormControl('');

  ngOnInit(): void {

    this.searchControl.valueChanges.pipe(
      switchMap((filterData) => this.defaultTableService.getFilteredData(filterData))
    ).subscribe((data) => {
      this.defaultTableList = data;
    });
  }


}
