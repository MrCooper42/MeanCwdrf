import { Component, OnInit } from '@angular/core';

@Component({
  selector:    'app-donate',
  templateUrl: './donate.component.html',
  styleUrls:   ['./donate.component.css']
})
export class DonateComponent implements OnInit {
  private donateLink: string;

  constructor() {
    this.donateLink =
      'https://www.paypal.com/donate/?token=WItmqYodzpgiME-MEdUemZw83LOtyajyueo0VmqjsW' +
      '_bLKIDy5_OD0Jp53gJWzp7yvQVNm&country.x=US&locale.x=US';
  }

  ngOnInit() {
  }

}
