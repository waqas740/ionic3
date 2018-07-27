import { Component } from '@angular/core';
import { AboutPage } from '../about/about';
import { OfferPage } from '../offer/offer';
import {OfferDetail } from '../offer_details/offer_detail'

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = OfferPage;
  tab2Root = AboutPage;
  tab3Root = OfferDetail;

  constructor() {

  }
}
