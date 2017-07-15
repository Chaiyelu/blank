import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'business',
	templateUrl: 'business.component.html'
})

export class BusinessComponent implements OnInit {
	isEdit:boolean;
	constructor(){}
	ngOnInit() { 
		this.isEdit = false;
	}
}