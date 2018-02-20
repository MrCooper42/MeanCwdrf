import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    PageNotFoundComponent,
    LoginComponent
  ],
  imports:      [
    BrowserModule,
    AppRoutingModule
  ],
  providers:    [],
  bootstrap:    [AppComponent]
})
export class AppModule {
}
