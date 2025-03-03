import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-go-back',
  templateUrl: './go-back.component.html',
  standalone: true,
  imports: []
})
export class GoBackComponent {

  constructor(private router: Router) {

  }

  goToBack() {
    this.router.navigate(['/dashboard/default'])
  }

}
