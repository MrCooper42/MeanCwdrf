import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { AboutComponent } from './about/about.component';
import { DonateComponent } from './donate/donate.component';
import { ContactComponent } from './contact/contact.component';
import { PartnersComponent } from './partners/partners.component';
import { NewsComponent } from './news/news.component';
import { TeamComponent } from './team/team.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'donate', component: DonateComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'partners', component: PartnersComponent },
  { path: 'news', component: NewsComponent },
  { path: 'team', component: TeamComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
    )
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}

export const routingComponents = [
  HomeComponent,
  PageNotFoundComponent,
  AboutComponent,
  DonateComponent,
  ContactComponent,
  PartnersComponent,
  NewsComponent,
  TeamComponent,
];
