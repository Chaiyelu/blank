import { Component, OnInit, ViewChild } from '@angular/core';
import { ViewController, NavController, Slides, NavParams, Platform } from "ionic-angular";
import { RegsiterpageComponent } from "../regsiterpage/regsiterpage.component";

@Component({
  selector: 'loginpage',
  templateUrl: 'loginpage.component.html'
})

export class LoginpageComponent implements OnInit {
  @ViewChild('mySlider') slider: Slides;

  private selected_segment = 0;
  top_segment = 'top_0';
  segment = 'sites';

  rootNavCtrl: NavController;

  constructor(
    public navCtrl: NavController,
    public viewCtrl: ViewController,
    public navParams: NavParams,
    public platform: Platform
  ) {
    this.rootNavCtrl = navParams.get('rootNavCtrl');
    this.platform = platform;

  }
  ngOnInit() { }

  select(index) {
    if (index === 2) {
      this.top_segment = 'top_2';
    }
    if (index === 1) {
      this.top_segment = 'top_1';
    }
    if (index === 0) {
      this.top_segment = 'top_0';
    }
    this.slider.slideTo(index, 500);
  }

  select_segment(index) {
    this.selected_segment = index;
    console.log("this.selected_segment: " + this.selected_segment);
  }

  onSlideChanged($event) {
    if (((($event.touches.startX - $event.touches.currentX) <= 100) || (($event.touches.startX - $event.touches.currentX) > 0)) && (this.slider.isBeginning() || this.slider.isEnd())) {
      console.log("interdit Direction");
    }
    else {
      console.log("OK Direction");
    }

  }

  panEvent(e) {
    let currentIndex = this.slider.getActiveIndex();
    if (currentIndex === 2) {
      this.top_segment = 'top_2';
    }
    if (currentIndex === 1) {
      this.top_segment = 'top_1';
    }
    if (currentIndex === 0) {
      this.top_segment = 'top_0';
    }
  }

  doClose() {
    this.viewCtrl.dismiss();
  }

  doRegsiter() {
    this.navCtrl.push(RegsiterpageComponent);
  }
}
