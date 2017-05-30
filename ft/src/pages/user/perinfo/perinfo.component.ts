import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController } from "ionic-angular";

import { DeliveryComponent } from "../perinfo/delivery/delivery.component";

// @IonicPage()
@Component({
  selector: 'perinfo',
  templateUrl: 'perinfo.component.html'
})

export class PerinfoComponent implements OnInit {

  constructor(
    private navCtrl: NavController
  ) {

  }

  ngOnInit() { }

  goDelivery() {
    this.navCtrl.push(DeliveryComponent);
  }
}
