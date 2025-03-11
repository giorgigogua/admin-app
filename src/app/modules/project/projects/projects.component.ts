import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, switchMap } from 'rxjs';
import { DefaultTableService } from '../../../services/default-table.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  providers: [DefaultTableService]
})
export class ProjectsComponent implements OnInit {

  constructor(private defaultTableService: DefaultTableService) {

  }

  @Input() defaultTableList: any[] = []


  searchTerm: string = '';
  searchControl: FormControl = new FormControl('');

  ngOnInit(): void {
    this.searchControl.valueChanges.pipe(
      debounceTime(300),
      switchMap((searchTerm) => this.defaultTableService.getFilteredProducts(searchTerm))
    ).subscribe((data) => {
      this.defaultTableList = data;
    });
  }


}
