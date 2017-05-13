import { Component } from '@angular/core';

import { NavController, ModalController } from 'ionic-angular';
import { LoginpageComponent } from "../../shared/components/loginpage/loginpage.component";

@Component({
  selector: 'page-order',
  templateUrl: 'order.component.html'
})
export class OrderComponent {

  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController
  ) {

  }

  doLogin(){
    let LoginModal = this.modalCtrl.create(LoginpageComponent);
    LoginModal.present();
  }
}
