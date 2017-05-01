import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { FoodSellerComponent } from '../foodseller/foodseller.component';

@Component({
  selector: 'page-home',
  templateUrl: 'home.component.html'
})
export class HomeComponent {
  mySlideOptions = {
    pager: true
  };
  constructor(public navCtrl: NavController) {

  }

  goToFoodSeller(){
    this.navCtrl.push(FoodSellerComponent);
  }

}
