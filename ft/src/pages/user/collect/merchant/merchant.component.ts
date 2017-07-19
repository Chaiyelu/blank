import { Component, OnInit } from '@angular/core';
import { NavParams } from "ionic-angular";
import { Store } from "@ngrx/store";
import { collectFold } from "../../../../shared/components/shopcart/shopcart.animations";

@Component({
	selector: 'merchant',
	templateUrl: 'merchant.component.html',
	animations: [collectFold]
})

export class MerchantComponent implements OnInit {
	isEdit: any;
	constructor(
		private store$: Store<any>
	) {
		store$.select('collEditStat').subscribe((status) => {
			this.isEdit = status;
		})
	}

	ngOnInit() {
		// this.isEdit = false;
	}
}