import { Component, OnInit, OnDestroy,forwardRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { OfferService } from './offer.service'
import * as _ from 'lodash';
@Component({
  selector: 'page-offer',
  templateUrl: 'offer.html',
  providers: [OfferService]
})
export class OfferPage implements OnInit {

  offers: Array<any> = [];
  items: Array<any> = [];

  constructor(public navCtrl: NavController, private _offerService: OfferService) {

  }
  ngOnInit(): void {
     this._offerService.getOffers().subscribe(offers => {
       this.items = offers;
       this.offers = _.cloneDeep(this.items)

     }, err => {
       console.log(err);
     })
  }
  getItems(ev: any) {
     // Reset items back to all of the items
    this.offers = _.cloneDeep(this.items)
  // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.offers = this.offers.filter((item) => {
        item.name = item.name.toLowerCase()
        return (item.name.indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  doInfinite(): Promise<any> {
    console.log('Begin async operation');

    return new Promise((resolve) => {
      this._offerService.getOffers()
      .subscribe(offers =>{
        this.offers = this.offers.concat(offers);
        resolve()
      })
    })
   }
   doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    this._offerService.getOffers()
      .subscribe(offers =>{
        this.offers = this.offers.concat(offers);
        refresher.complete();
    })
   }
  


}
