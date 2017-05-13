import { Component, OnInit } from '@angular/core';
import { ViewController, NavController } from "ionic-angular";
import { RegsiterpageComponent } from "../regsiterpage/regsiterpage.component";

@Component({
  selector: 'loginpage',
  templateUrl: 'loginpage.component.html'
})

export class LoginpageComponent implements OnInit {

  constructor(
    public viewCtrl: ViewController,
    public navCtrl: NavController
  ) { }

  ngOnInit() { }

  doClose() {
    this.viewCtrl.dismiss();
  }

  doRegsiter() {
    this.navCtrl.push(RegsiterpageComponent);
  }
}
