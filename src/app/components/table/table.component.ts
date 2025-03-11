import { CommonModule } from '@angular/common';
import { booleanAttribute, Component, Input } from '@angular/core';
import { DefaultTableService } from '../../services/default-table.service';
import { StatusComponent } from '../status/status.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
  standalone: true,
  imports: [CommonModule, StatusComponent],
  providers: [DefaultTableService]

})
export class TableComponent {

  @Input() defaultTableList: any


  constructor(private defaultTableService: DefaultTableService) {

    this.defaultTableService.getAll().subscribe((data: any) => {
      this.defaultTableList = data

    })

  }


}
