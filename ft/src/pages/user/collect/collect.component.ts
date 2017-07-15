import { Component, OnInit, AfterViewInit } from '@angular/core';
import { SuperTabsController } from 'ionic2-super-tabs';
import { BusinessComponent } from "./business/business.component";
import { ContentComponent } from "./content/content.component";
import { GroupComponent } from "./group/group.component";
@Component({
	selector: 'collect',
	templateUrl: 'collect.component.html'
})

export class CollectComponent implements OnInit, AfterViewInit {
	businessPage: any = BusinessComponent;
	contentPage: any = ContentComponent;
	groupPage: any = GroupComponent;

	constructor(private superTabsCtrl: SuperTabsController) { }
	ngOnInit() {
		
	}
	
	ngAfterViewInit() {
		this.superTabsCtrl.enableTabsSwipe(false, 'collectTabs');
	}
}