import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AuthenticationModule } from './authentication/authentication.module';

@NgModule({
  imports: [
    CommonModule,
    SharedRoutingModule,
    AuthenticationModule
  ],
  declarations: [ PageNotFoundComponent, NavbarComponent, FooterComponent ]
})
export class SharedModule {
}
