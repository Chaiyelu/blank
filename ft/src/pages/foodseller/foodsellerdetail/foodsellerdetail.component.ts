import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, Renderer, Renderer2 } from '@angular/core';
import { Content, NavParams } from 'ionic-angular';
import { FoodSellerDetailService } from './foodsellerdetail.service';

import { SellerdetailComponent } from "./sellerdetail/sellerdetail.component";
import { SellergoodsComponent } from "./sellergoods/sellergoods.component";
import { SellerratingsComponent } from "./sellerratings/sellerratings.component";

@Component({
  selector: 'foodsellerdetail',
  templateUrl: 'foodsellerdetail.component.html'
})

export class FoodSellerDetailComponent implements OnInit, AfterViewInit {
  @ViewChild(Content) content: Content;
  @ViewChild('superTabs') superTabs: ElementRef;
  sellerGoodsPage: any = SellergoodsComponent;
  SellerRatingsPage: any = SellerratingsComponent;
  sellerDetailpage: any = SellerdetailComponent;
  goods: any[] = [];
  seller: object;
  h: number;

  constructor(
    public navParams: NavParams,
    public foodSellerDetailService: FoodSellerDetailService,
    public renderer: Renderer,
    public renderer2: Renderer2,
  ) { }

  ngOnInit() {
    let id = this.navParams.get('id');

    this.foodSellerDetailService.getSeller(id).subscribe(
      seller => {
        this.seller = seller;
      }
    );

  }

  ngAfterViewInit() {
    // console.log(this.superTabs.nativeElement.offsetHeight);
    // this.h = this.superTabs.nativeElement.offsetHeight - 178;
    // this.renderer.setElementStyle(this.superTabs.nativeElement,'height',this.h+'px');
  }

  onScroll($event){
    let el = this.content._elementRef.nativeElement.getElementsByClassName('shopcartwrapper')[0];
    let h = 134-this.content.scrollTop;
    this.renderer2.setStyle(el,'bottom',h+'px');
  }

}
