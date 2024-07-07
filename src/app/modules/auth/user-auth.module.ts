import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material.module';
import { HttpClientModule } from '@angular/common/http';
import { UserAuthRoutingModule } from './user-auth-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { LogoComponent } from '../homepage/components/logo/logo.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';
import { OtpComponent } from './pages/otp/otp.component';
// import { PrimeNgModule } from 'src/app/primeNg.module';

@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    LogoComponent,
    ResetPasswordComponent,
    OtpComponent
    
  ],
  imports: [
    CommonModule,
    MaterialModule,
    // PrimeNgModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    UserAuthRoutingModule,
  ],
  providers: [ JwtHelperService,
     { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },]
})

export class UserAuthModule { }


