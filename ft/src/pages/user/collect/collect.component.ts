import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { SegmentButton, NavController } from 'ionic-angular';
import { SuperTabsController, SuperTabs } from 'ionic2-super-tabs';
import { MerchantComponent } from "./merchant/merchant.component";
import { ContentComponent } from "./content/content.component";
import { GroupComponent } from "./group/group.component";
import { Store } from "@ngrx/store";
@Component({
	selector: 'collect',
	templateUrl: 'collect.component.html'
})

export class CollectComponent implements OnInit, AfterViewInit {
	@ViewChild('collectTabs') collectTabs: SuperTabs;
	merchantPage: any = MerchantComponent;
	contentPage: any = ContentComponent;
	groupPage: any = GroupComponent;
	editBtnText: string = '编辑';
	isEdit: any;

	nav:any;

	constructor(
		private superTabsCtrl: SuperTabsController,
		private store$: Store<any>,
		public navCtrl: NavController
	) {
		store$.select('collEditStat').subscribe((status) => {
			this.isEdit = status;
		})
	}

	ngOnInit() {
		this.nav = this.navCtrl;
	}

	ngAfterViewInit() {
		this.superTabsCtrl.enableTabsSwipe(false, 'collectTabs');
		let aaa = this.collectTabs.getElementRef().nativeElement.getElementsByClassName('segment-button');
		console.log(aaa);
		aaa.disabled = true;
	}

	doEdit() {
		this.editBtnText = this.isEdit ? '编辑' : '完成';
		this.store$.dispatch({ type: 'TOGGLE_COLL_EDIT_STAT' });
	}
}