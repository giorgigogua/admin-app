import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavService } from '../../../services/nav.service';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrl: './password-reset.component.scss'
})
export class PasswordResetComponent implements OnInit, OnDestroy {
  constructor(private navService: NavService) {

  }


  ngOnInit(): void {
    this.navService.hideNav()
  }

  ngOnDestroy(): void {
    this.navService.showNav()
  }
}
