import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: [ './navbar.component.css' ]
})
export class NavbarComponent implements OnInit {
  public show: boolean;
  public lgRightOptions: string;
  public smRightOptions: string;

  constructor() {
    this.show = true;
    this.lgRightOptions = 'navbar-nav flex-row ml-md-auto d-none d-md-flex';
    this.smRightOptions = 'navbar-nav';
  }

  public toggleShow = (): void => {
    this.show = !this.show;
  }

  public getNavSize = (): string => this.show ? this.lgRightOptions : this.smRightOptions;

  ngOnInit() {
  }

}
