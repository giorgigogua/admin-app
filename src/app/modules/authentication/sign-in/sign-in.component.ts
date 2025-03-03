import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavService } from '../../../services/nav.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss',
})
export class SignInComponent implements OnInit, OnDestroy {

  constructor(private router: Router, private navService: NavService) {

  }

  navigateToSignUp() {
    this.router.navigate(['/authentication/sign-up'])
  }


  ngOnInit(): void {
    this.navService.hideNav()
  }

  ngOnDestroy(): void {
    this.navService.showNav()
  }

}
