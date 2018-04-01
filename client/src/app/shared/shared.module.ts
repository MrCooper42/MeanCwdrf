import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { FooterComponent } from './templates/footer/footer.component';
import { NavbarComponent } from './templates/navbar/navbar.component';
import { DropdownDirective } from './directives/dropdown.directive';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PaypalComponent } from './modals/paypal/paypal.component';

@NgModule({
  imports: [
    CommonModule,
    SharedRoutingModule,
    NgbModule
  ],
  declarations: [
    NavbarComponent,
    FooterComponent,
    DropdownDirective,
    PaypalComponent
  ],
  providers: [
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    DropdownDirective
  ]
})
export class SharedModule {
}
