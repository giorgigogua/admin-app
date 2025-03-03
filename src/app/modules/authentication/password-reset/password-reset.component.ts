import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavService } from '../../../services/nav.service';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrl: './password-reset.component.scss'
})
export class PasswordResetComponent implements OnInit, OnDestroy {
  constructor(private router: Router, private navService: NavService) {

  }


  navigateToSignIn() {
    this.router.navigate(['/authentication/sign-in'])
  }


  ngOnInit(): void {
    this.navService.hideNav()
  }

  ngOnDestroy(): void {
    this.navService.showNav()
  }
}
