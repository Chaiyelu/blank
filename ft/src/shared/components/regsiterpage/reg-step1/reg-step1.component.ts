import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { NavController, AlertController } from "ionic-angular";
import { RegStep2Component } from "../reg-step2/reg-step2.component";
import { VercodeService } from "../../../service/vercode.service";
@Component({
  selector: 'reg-step1',
  templateUrl: 'reg-step1.component.html'
})

export class RegStep1Component implements OnInit {

  mobile: string = '';
  mobileForm: FormGroup;
  constructor(
    public navCtrl: NavController,
    public formBuilder: FormBuilder,
    private alertCtrl: AlertController,
    private vercodeService: VercodeService
  ) {
    this.mobileForm = formBuilder.group({
      mobile: ['', Validators.compose([Validators.minLength(11), Validators.maxLength(11), Validators.required, Validators.pattern("^(13[0-9]|15[012356789]|17[03678]|18[0-9]|14[57])[0-9]{8}$")])]
    })
  }
  stepArr: any[] = ['输入手机号', '输入验证码', '设置密码'];
  ngOnInit() { }

  getVercode() {
    /**
     * 正确的逻辑是：
     * 1，用手机号码向服务器做发送验证码的请求。
     * 2，服务器发送验证码成功之后将手机号码和验证码等信息保存到数据库中，无论是否成功都发送通知到前台。
     * 3，前台根据服务器返回的结果做出响应，成功则跳转到步骤二，失败则弹出失败提示。
     */
    this.vercodeService.sendVercode(this.mobile).subscribe((res) => {
      console.log(res);
      if (201 == res.status) {
        this.navCtrl.push(RegStep2Component, this.mobile);
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
