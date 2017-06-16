import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ActionSheetController } from "ionic-angular";

import { UserService } from "../user.service";
import { UserModel } from "../../../shared/models/user.model";
import { DeliveryComponent } from "../perinfo/delivery/delivery.component";
import { UsernameComponent } from "./username/username.component";
import { BirthdayComponent } from "./birthday/birthday.component";

// @IonicPage()
@Component({
  selector: 'perinfo',
  templateUrl: 'perinfo.component.html'
})

export class PerinfoComponent implements OnInit {
  userInfo: UserModel = <UserModel>{};
  constructor(
    private navCtrl: NavController,
    private modalCtrl: ModalController,
    public actionSheetCtrl: ActionSheetController,
    private userService: UserService,
    private navParams: NavParams
  ) {
    let uid = navParams.data;
    console.log(uid);
    this.userService.getUserInfo(uid).subscribe((result) => {
      this.userInfo = result;
    });
  }

  ngOnInit() { }

  // ionViewCanEnter(): boolean {

  //     return false;

  // }

  goDelivery() {
    this.navCtrl.push(DeliveryComponent);
  }

  goEditUsername() {
    let usernameModal = this.modalCtrl.create(UsernameComponent, { username: this.userInfo.username });
    usernameModal.onDidDismiss(data => {
      this.userInfo.username = data;
    });
    usernameModal.present();
  }

  goEditBirthday() {
    let birthdayModal = this.modalCtrl.create(BirthdayComponent, { birthday: this.userInfo.birthday });
    birthdayModal.onDidDismiss(data => {
      this.userInfo.birthday = data;
    });
    birthdayModal.present();
  }

  goEditAvatar() {
    let actionSheet = this.actionSheetCtrl.create({
      buttons: [
        {
          text: '拍照',
          role: 'destructive',
          handler: () => {
            console.log('拍照');
          }
        },
        {
          text: '从手机相册选择',
          handler: () => {
            console.log('从手机相册选择');
          }
        },
        {
          text: '取消',
          role: 'cancel',
          handler: () => {
            console.log('取消');
          }
        }
      ]
    });

    actionSheet.present();
  }
}
