import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, AlertController } from "ionic-angular";
import { PerinfoComponent } from "../perinfo/perinfo.component";
import { UserService } from "../user.service";

@Component({
  selector: 'set',
  templateUrl: 'set.component.html'
})

export class SetComponent implements OnInit {
  uid: any;
  constructor(
    private navCtrl: NavController,
    private navParams: NavParams,
    private alertCtrl: AlertController,
    private userService: UserService
  ) {
    this.uid = navParams.data;
  }

  ngOnInit() { }

  goToPerInfo() {
    this.navCtrl.push(PerinfoComponent, this.uid);
  }

  logout() {
    let alert = this.alertCtrl.create({
      message: '退出后将不能查看订单，\n确定退出吗',
      buttons: [
        {
          text: '取消',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }, {
          text: '确定',
          handler: () => {
            alert.dismiss();
            this.userService.logout(this.uid).subscribe((res) => {
              console.log(res);
              this.navCtrl.pop();
            }, (err) => {
              console.log(err);
            });
          }
        }
      ]
    });
    alert.present();
  }

}
