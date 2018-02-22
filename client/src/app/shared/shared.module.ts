import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AuthenticationModule } from './authentication/authentication.module';
import { AuthenticationService } from './authentication/authentication.service';
import { AuthGuardService } from './authentication/auth-guard.service';

@NgModule({
  imports: [
    CommonModule,
    SharedRoutingModule,
    AuthenticationModule
  ],
  declarations: [
    NavbarComponent,
    FooterComponent
  ],
  providers: [
    AuthenticationService,
    AuthGuardService
  ]
})
export class SharedModule {
}
