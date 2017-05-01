import { Component, OnInit } from '@angular/core';

import { SellerratingsService } from './sellerratings.service';

@Component({
	selector: 'sellerratings',
	templateUrl: 'sellerratings.component.html',
	providers: [SellerratingsService]
})

export class SellerratingsComponent implements OnInit {

	constructor(private sellerratingsService: SellerratingsService) { }

	ngOnInit() {
	}
}
