import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { NavController, AlertController, ModalController } from "ionic-angular";
import { RegStep2Component } from "../reg-step2/reg-step2.component";
import { LoginpageComponent } from "../../loginpage/loginpage.component";
import { CheckcodeService } from "../../../service/checkcode.service";
import { UserService } from "../../../../pages/user/user.service";
@Component({
  selector: 'reg-step1',
  templateUrl: 'reg-step1.component.html'
})

export class RegStep1Component implements OnInit {

  mobile: string = '';
  mobileForm: FormGroup;
  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    public formBuilder: FormBuilder,
    private alertCtrl: AlertController,
    private checkcodeService: CheckcodeService,
    private userService: UserService
  ) {
    this.mobileForm = formBuilder.group({
      mobile: ['', Validators.compose([Validators.minLength(11), Validators.maxLength(11), Validators.required, Validators.pattern("^(13[0-9]|15[012356789]|17[03678]|18[0-9]|14[57])[0-9]{8}$")])]
    })
  }
  stepArr: any[] = ['输入手机号', '输入验证码', '设置密码'];
  ngOnInit() { }

  getCheckcode() {
    /**
     * 正确的逻辑是：
     * 1，验证手机号是否已被注册。如被注册，则提示并询问是否继续发送验证码用于登录，如果没被注册，则执行第二步。
     * 2，用手机号码向服务器做发送验证码的请求。
     * 3，服务器发送验证码成功之后将手机号码和验证码等信息保存到数据库中，无论是否成功都发送通知到前台。
     * 4，前台根据服务器返回的结果做出响应，成功则跳转到步骤二，失败则弹出失败提示。
     */
    this.userService.checkMobileIsRegistered(this.mobile).subscribe((res) => {
      let alert = this.alertCtrl.create({
        message: '该手机号已经被注册，验证手机号后可直接登录',
        buttons: [
          {
            text: '取消',
            role: 'cancel',
            handler: () => {
              console.log('Cancel clicked');
            }
          }, {
            text: '发送验证码',
            handler: () => {
              alert.dismiss();
              this.sendCheckCode().subscribe(() => {
                //跳转到验证码登录页面
                console.log('11');
                let loginModal = this.modalCtrl.create(LoginpageComponent, { currentPage: 1, isSended: true });
                loginModal.present();
              });

            }
          }
        ]
      });
      alert.present();
    }, (err) => {
      if (400 == err.status) {
        //改手机号未被注册
        this.sendCheckCode().subscribe(() => {
          this.navCtrl.push(RegStep2Component, this.mobile);
        });
      }
    })

  }

  sendCheckCode() {
    return new Observable((observer: Observer<any>) => {
      console.log('send checkcode');
      this.checkcodeService.sendCheckcode(this.mobile).subscribe((res) => {
        console.log(res);
        if (201 == res.status) {
          observer.next(res);
          observer.complete();
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
        observer.complete();
      });
    });
  }

}
