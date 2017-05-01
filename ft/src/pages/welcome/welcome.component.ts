import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomeComponent } from '../home/home.component';

@Component({
  templateUrl:'welcome.component.html'
})
export class WelcomeComponent {
  constructor(public navCtrl: NavController){}

  goToHome(){
    this.navCtrl.setRoot(HomeComponent);
  }
}
