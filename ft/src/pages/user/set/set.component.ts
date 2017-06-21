import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from "ionic-angular";
import { PerinfoComponent } from "../perinfo/perinfo.component";

@Component({
  selector: 'set',
  templateUrl: 'set.component.html'
})

export class SetComponent implements OnInit {
  uid: any;
  constructor(
    private navCtrl: NavController,
    private navParams: NavParams
  ) {
    this.uid = navParams.data;

  }

  ngOnInit() { }

  goToPerInfo() {
      this.navCtrl.push(PerinfoComponent, this.uid);
  }
}
