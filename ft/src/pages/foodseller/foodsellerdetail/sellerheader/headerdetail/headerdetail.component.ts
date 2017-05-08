import { Component, OnInit } from '@angular/core';
import { NavParams, ViewController } from "ionic-angular";

@Component({
	selector: 'headerdetail',
	templateUrl: 'headerdetail.component.html'
})

export class HeaderdetailComponent implements OnInit {

  seller:object;
  constructor(
    public navparams:NavParams,
    public viewCtrl:ViewController
  ){
    this.seller = this.navparams.get('seller');
  }
	ngOnInit() { }

  hideDetail(){
    this.viewCtrl.dismiss();
  }
}
