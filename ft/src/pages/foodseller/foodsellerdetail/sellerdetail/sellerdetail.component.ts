import { Component, OnInit } from '@angular/core';
import { NavParams } from "ionic-angular";
import { FoodSellerDetailService } from "../foodsellerdetail.service";

@Component({
	selector: 'sellerdetail',
	templateUrl: 'sellerdetail.component.html'
})

export class SellerdetailComponent implements OnInit {
  seller:object = {};
	constructor(
    private foodSellerDetailService: FoodSellerDetailService,
    public navParams:NavParams
  ) { }

	ngOnInit() {
    console.log(this.navParams.data);
    this.seller = this.navParams.data;
	}
}
