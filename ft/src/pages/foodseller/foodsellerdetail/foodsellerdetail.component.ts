import { Component, OnInit, ViewChild } from '@angular/core';
import { Content } from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import { FoodSellerDetailService } from './foodsellerdetail.service';

import { SellerdetailComponent } from "./sellerdetail/sellerdetail.component";
import { SellergoodsComponent } from "./sellergoods/sellergoods.component";
import { SellerratingsComponent } from "./sellerratings/sellerratings.component";

@Component({
  selector: 'foodsellerdetail',
  templateUrl: 'foodsellerdetail.component.html'
})

export class FoodSellerDetailComponent implements OnInit {
  @ViewChild(Content) content: Content;
  sellerGoodsPage: any = SellergoodsComponent;
  SellerRatingsPage: any = SellerratingsComponent;
  sellerDetailpage: any = SellerdetailComponent;
  goods: any[] = [];
  seller: object = {};
  constructor(
    public navParams: NavParams,
    public foodSellerDetailService: FoodSellerDetailService
  ) { }

  ngOnInit() {
    let id = this.navParams.get('id');
    console.log(this.content.directionY);
    // this.foodSellerDetailService.getGoodsList(id).subscribe(
    //   goods => {
    //     this.goods = goods;
    //     console.log(goods);
    //   }
    // );
    this.foodSellerDetailService.getSeller(id).subscribe(
      seller => {
        this.seller = seller;
        console.log(seller);
      }
    )

  }



}
