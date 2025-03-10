import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  standalone: true,
  imports: [CommonModule]
})
export class StatusComponent implements OnInit {

  @Input() status: any;
  @Input() text?: string
  @Input() textColor?: string

  public statusColor?: string;

  ngOnInit(): void {
    this.setStatusColor();
  }

  private setStatusColor(): void {
    switch (this.status) {
      case 'Ready to ship':
        this.statusColor = '#b5cbbb';
        this.textColor = 'green'
        break;
      case 'Cancelled':
        this.statusColor = '#FF9999';
        this.textColor = 'red'
        break;
      case 'In Testing':
        this.statusColor = '#FFD580';
        this.textColor = 'orange'
        break;
      case 'Backlog':
        this.statusColor = '#CBD3D8';
        this.textColor = 'gray'
        break;
      case 'Completed':
        this.statusColor = '#b5cbbb';
        this.textColor = 'green'
        break;
      case 'Cancelled':
        this.statusColor = '#FF9999';
        this.textColor = 'red'
        break;
      case 'Pending':
        this.statusColor = '#FFD580';
        this.textColor = 'orange'
        break;
    }
  }

}
