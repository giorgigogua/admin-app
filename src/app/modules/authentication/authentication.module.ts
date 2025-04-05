import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';
import { GoBackComponent } from "../../components/go-back/go-back.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ValidationErrorComponent } from "../../components/validation-error/validation-error.component";
import { TranslateModule } from '@ngx-translate/core';
import { VerificationCodeComponent } from './verification-code/verification-code.component';


@NgModule({
  declarations: [
    SignUpComponent,
    SignInComponent,
    PasswordResetComponent,
    VerificationCodeComponent
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    GoBackComponent,
    ReactiveFormsModule,
    FormsModule,
    ValidationErrorComponent,
    TranslateModule
]
})
export class AuthenticationModule { }
