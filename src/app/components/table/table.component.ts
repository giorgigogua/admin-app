import { CommonModule, NgIf } from '@angular/common';
import { booleanAttribute, Component, Input } from '@angular/core';
import { DefaultTableService } from '../../services/default-table.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
  standalone: true,
  imports: [CommonModule]

})
export class TableComponent {

  defaultTableList: any

  statuses: any

  constructor(private defaultTableService: DefaultTableService) {

    this.defaultTableService.getAll().subscribe((data: any) => {
      this.defaultTableList = data

    
    })



  }

  @Input({ transform: booleanAttribute }) tableHeader: boolean = false

  @Input() title: string = ""
  @Input() updated: string = ""
  @Input() status: string = ""
  @Input() img: string = ""
  @Input() author: string = ""
  @Input() headerTitle: string = ""
  @Input() headerStatus: string = ""
  @Input() headerTeam: string = ""
  @Input() headerAuthor: string = ""










}
