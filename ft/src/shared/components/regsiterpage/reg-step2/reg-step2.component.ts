import { Component, OnInit } from '@angular/core';
import { NavParams, AlertController } from "ionic-angular";
import { VercodeService } from "../../../service/vercode.service";
@Component({
  selector: 'reg-step2',
  templateUrl: 'reg-step2.component.html'
})

export class RegStep2Component implements OnInit {

  mobile: string;
  stepArr: any[] = ['输入手机号', '输入验证码', '设置密码'];
  displayMobile: string;
  btnStatus: boolean;
  btnText: string;
  time: number = 90;
  constructor(
    public navParams: NavParams,
    private alertCtrl: AlertController,
    private vercodeService: VercodeService
  ) {
    this.mobile = this.navParams.data;
  }

  ngOnInit() {
    this._disableBtn();
  }

  _disableBtn() {

    this.btnStatus = false;
    setTimeout(() => {
      this.time--;
      if (this.time == 0) {
        this.btnStatus = true;
        this.btnText = `重获验证码`;
        this.time = 90;
      } else {
        this.btnText = `${this.time}s后重新获取`;
        this._disableBtn();
      }
    }, 1000)
  }

  getVercode() {
    this.vercodeService.sendVercode(this.mobile).subscribe((res) => {
      if (201 == res.status) {
        this._disableBtn();
        let alert = this.alertCtrl.create({
          message: '重新发送验证码成功，请查收',
          buttons: [
            {
              text: '确定',
              role: 'cancel',
              handler: () => {
                console.log('Cancel clicked');
              }
            }
          ]
        });
        alert.present();
      } else {

      }
    }, (error) => {
      console.log(error);
      //请求次数过于频繁
      let alert = this.alertCtrl.create({
        title: '验证码发送失败',
        message: error._body,
        buttons: [
          {
            text: '确定',
            role: 'cancel',
            handler: () => {
              console.log('Cancel clicked');
            }
          }
        ]
      });
      alert.present();
    });

  }
}
