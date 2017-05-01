import { Component, OnInit } from '@angular/core';

import { Sellerdetail } from './shared/sellerdetail.model';
import { SellerdetailService } from './sellerdetail.service';

@Component({
	selector: 'sellerdetail',
	templateUrl: 'sellerdetail.component.html',
	providers: [SellerdetailService]
})

export class SellerdetailComponent implements OnInit {

	constructor(private sellerdetailService: SellerdetailService) { }

	ngOnInit() {

	}
}
