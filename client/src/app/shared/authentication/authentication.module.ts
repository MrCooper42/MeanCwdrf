import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
  ],
  declarations: [
    RegisterComponent,
    LoginComponent
  ]
})
export class AuthenticationModule {
}
