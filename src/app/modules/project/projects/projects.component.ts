import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { switchMap } from 'rxjs';
import { DefaultTableService } from '../../../services/default-table.service';
import { DefaultTableInterface } from '../../../interfaces/default-table';

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
  selectedStatus: string = '';
  statuses: any[] = []

  ngOnInit(): void {

    this.searchControl.valueChanges.pipe(
      switchMap((filterData) => this.defaultTableService.getFilteredData(filterData))
    ).subscribe((data) => {
      this.defaultTableList = data;
    });

    this.defaultTableService.getStatuses().subscribe((statuses: string[]) => {
      this.statuses = statuses;
    });
  }

  onStatusChange(status: string): void {
    this.selectedStatus = status;
    this.fetchItems();
  }

  private fetchItems(): void {
    this.defaultTableService.getData(this.selectedStatus).subscribe((data: DefaultTableInterface[]) => {
      this.defaultTableList = data;
    });
  }


}
