import { Component, OnInit } from '@angular/core';
import { NavParams, AlertController, NavController } from "ionic-angular";
import { RegStep3Component } from "../reg-step3/reg-step3.component";
import { CheckcodeService } from "../../../service/checkcode.service";
@Component({
  selector: 'reg-step2',
  templateUrl: 'reg-step2.component.html'
})

export class RegStep2Component implements OnInit {
  mobile: string;
  code: string;
  stepArr: any[] = ['输入手机号', '输入验证码', '设置密码'];
  displayMobile: string;
  btnStatus: boolean;
  btnText: string;
  time: number = 90;
  constructor(
    public navParams: NavParams,
    private alertCtrl: AlertController,
    private navCtrl: NavController,
    private checkcodeService: CheckcodeService
  ) {
    this.mobile = navParams.data;
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

  getCheckcode() {
    this.checkcodeService.sendCheckcode(this.mobile).subscribe((res) => {
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
      }
    }, (err) => {
      console.log(err);
      //请求次数过于频繁
      let alert = this.alertCtrl.create({
        title: '验证码发送失败',
        message: err._body,
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

  checkCheckcode() {
    this.checkcodeService.checkCheckcode(this.mobile, this.code).subscribe((res) => {
      if (200 == res.status) {
        //验证成功，跳转到步骤三
        this.navCtrl.push(RegStep3Component, { mobile: this.mobile, code: this.code });
      }
    }, (err) => {
      //验证失败
      let alert = this.alertCtrl.create({
        title: '验证码验证失败',
        message: err._body,
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
    })
  }

}
