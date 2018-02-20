import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  imports:      [
    CommonModule,
    SharedRoutingModule
  ],
  declarations: [PageNotFoundComponent]
})
export class SharedModule {
}
