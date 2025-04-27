import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { UserActionComponent } from '../user-action/user-action.component';

@Component({
  selector: 'app-bell',
  templateUrl: './bell.component.html',
  styleUrl: './bell.component.scss',
  standalone:true,
  imports:[CommonModule, UserActionComponent]
})
export class BellComponent {

}
