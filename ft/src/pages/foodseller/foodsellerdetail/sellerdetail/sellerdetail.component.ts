import { Component, OnInit } from '@angular/core';
import { NavParams } from "ionic-angular";
import { FoodSellerDetailService } from "../foodsellerdetail.service";

@Component({
	selector: 'sellerdetail',
	templateUrl: 'sellerdetail.component.html'
})

export class SellerdetailComponent implements OnInit {
  seller:object = {};
  private classMap: string[];
	constructor(
    private foodSellerDetailService: FoodSellerDetailService,
    public navParams:NavParams
  ) {
    this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
  }

	ngOnInit() {
    console.log(this.navParams.data);
    this.seller = this.navParams.data;
	}
}
