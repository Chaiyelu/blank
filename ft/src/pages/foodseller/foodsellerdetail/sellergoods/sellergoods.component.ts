import { Component, OnInit, Input } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { FoodSellerDetailService } from '../foodsellerdetail.service';

@Component({
	selector: 'sellergoods',
	templateUrl: 'sellergoods.component.html'
})

export class SellergoodsComponent implements OnInit {
	sellergoods: any[] = [];

	constructor(
    private foodSellerDetailService: FoodSellerDetailService,
    public navParams:NavParams
  ) { }

	ngOnInit() {
    let id = this.navParams.get('id');
		this.foodSellerDetailService.getGoodsList(id).subscribe((res) => {
			this.sellergoods = res;
      console.log(res);
		});
	}
}
