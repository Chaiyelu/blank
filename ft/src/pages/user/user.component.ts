import { Component, OnInit } from '@angular/core';
import { NavController } from "ionic-angular";

import { PerinfoComponent } from "./perinfo/perinfo.component";

@Component({
  selector: 'user',
  templateUrl: 'user.component.html'
})

export class UserComponent implements OnInit {

  constructor(
    public navCtrl: NavController
  ) { }

  ngOnInit() { }

  goToPerInfo() {
    this.navCtrl.push(PerinfoComponent);
  }

  onScroll($event) {

  }


}
