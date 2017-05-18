import { Component, OnInit } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { LoginpageComponent } from "../../../shared/components/loginpage/loginpage.component";
@Component({
  selector: 'signin',
  templateUrl: 'signin.component.html'
})

export class SigninComponent implements OnInit {

  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController,
  ) {

  }
  ngOnInit() { }

  doLogin() {
    let LoginModal = this.modalCtrl.create(LoginpageComponent);
    LoginModal.present();
  }
}
