import { Component, OnInit } from '@angular/core';
import { FoodSellerService } from './foodseller.service';
import { NavController, NavParams } from 'ionic-angular';
import { FoodSellerDetailComponent } from "./foodsellerdetail/foodsellerdetail.component";
import { FoodSellerModel } from "./foodseller.model";

@Component({
  selector: 'food-seller',
  templateUrl: 'foodseller.component.html'
})
export class FoodSellerComponent implements OnInit {
  private foodSeller: any[] = [];
  constructor(
    public foodSellerService:FoodSellerService,
    public navCtrl: NavController
  ) { }

  ngOnInit() {
    this.foodSellerService.getSeller().subscribe(
      seller =>{
        this.foodSeller = seller;
        console.log(seller);
      }
    )
  }

  goFoodSellerDetail(item:FoodSellerModel){
    this.navCtrl.push(FoodSellerDetailComponent, {id:item.id});
  }
}
