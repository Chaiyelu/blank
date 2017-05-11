import { Component, OnInit } from '@angular/core';
import { NavParams, ViewController } from "ionic-angular";

@Component({
  selector: 'headerdetail',
  templateUrl: 'headerdetail.component.html'
})

export class HeaderdetailComponent implements OnInit {

  seller: object;
  classMap: string[];
  constructor(
    public navparams: NavParams,
    public viewCtrl: ViewController
  ) {
    this.seller = this.navparams.get('seller');
    this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
  }
  ngOnInit() { }

  hideDetail() {
    this.viewCtrl.dismiss();
  }
}
