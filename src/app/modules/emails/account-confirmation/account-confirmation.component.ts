import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavService } from '../../../services/nav.service';

@Component({
  selector: 'app-account-confirmation',
  templateUrl: './account-confirmation.component.html',
  styleUrl: './account-confirmation.component.scss'
})
export class AccountConfirmationComponent implements OnInit, OnDestroy {

  constructor(private navService: NavService) {

  }


  ngOnInit(): void {
    this.navService.hideNav()
  }

  ngOnDestroy(): void {
    this.navService.showNav()
  }

}
