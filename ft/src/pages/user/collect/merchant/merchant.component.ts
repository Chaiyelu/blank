import { Component, OnInit } from '@angular/core';
import { NavParams } from "ionic-angular";
import { Store } from "@ngrx/store";
import { collectFold } from "../../../../shared/components/shopcart/shopcart.animations";
import { CollectionMerchantService } from "./merchant.service";

import { FoodSellerDetailComponent } from "../../../foodseller/foodsellerdetail/foodsellerdetail.component";

@Component({
	selector: 'merchant',
	templateUrl: 'merchant.component.html',
	animations: [collectFold]
})

export class MerchantComponent implements OnInit {
	isEdit: any;
	merChantList: any[];
	nav:any;

	constructor(
		private store$: Store<any>,
		private navParams:NavParams,
		public collectionMerchantService: CollectionMerchantService
	) {
		store$.select('collEditStat').subscribe((status) => {
			this.isEdit = status;
		});
		
		this.nav = navParams.data;
	}

	ngOnInit() {
		// this.isEdit = false;
	}

	ionViewDidEnter() {
		this.collectionMerchantService.getMerchantCollections().subscribe((res)=>{
			this.merChantList = res;
		});
	}

	goDetail(type,id) {
		console.log('type:'+type+';id:'+id);
		if ('seller'==type) {
			this.nav.push(FoodSellerDetailComponent, {id:id});
		}
	}
}