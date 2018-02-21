import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {}
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class AuthenticationRoutingModule {
}


/* TODO: https://www.sitepoint.com/component-routing-angular-router/
/* TODO: https://scotch.io/courses/routing-angular-2-applications/child-routes
  */
