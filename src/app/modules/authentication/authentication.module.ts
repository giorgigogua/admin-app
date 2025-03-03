import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';
import { GoBackComponent } from "../../components/go-back/go-back.component";


@NgModule({
  declarations: [
    SignUpComponent,
    SignInComponent,
    PasswordResetComponent
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    GoBackComponent
]
})
export class AuthenticationModule { }
