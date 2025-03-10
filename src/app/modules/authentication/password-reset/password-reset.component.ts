import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavService } from '../../../services/nav.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html'
})
export class PasswordResetComponent implements OnInit, OnDestroy {


  validationForm:FormGroup


  constructor(private router: Router, private navService: NavService) {
    this.validationForm = new FormGroup({
      mail: new FormControl("", [Validators.required, Validators.email]),
    })
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
