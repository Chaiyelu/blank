import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { NavController, ViewController, AlertController, ToastController, NavParams } from "ionic-angular";
import { UserService } from "../../../../pages/user/user.service";
import { UserComponent } from "../../../../pages/user/user.component";
@Component({
  selector: 'reg-step3',
  templateUrl: 'reg-step3.component.html'
})

export class RegStep3Component implements OnInit {

  stepArr: any[] = ['输入手机号', '输入验证码', '设置密码'];
  mobile: string;
  code: string;
  password: string;
  repassword: string;
  registerForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    public navParams: NavParams,
    public navCtrl: NavController,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private viewCtrl: ViewController,
    private userService: UserService
  ) {
    this.registerForm = formBuilder.group({
      password: ['', Validators.compose([Validators.minLength(6), Validators.maxLength(32), Validators.required])],
      repassword: []
    });
    this.mobile = navParams.get('mobile');
    this.code = navParams.get('code');
  }
  ngOnInit() { }

  register() {
    if (this.password != this.repassword) {
      let toast = this.toastCtrl.create({
        message: '两次输入密码不一致！',
        duration: 3000,
        position: 'middle',
        cssClass: 'login-toast'
      });
      toast.present();
    } else {
      this.userService.register(this.mobile, this.code, this.password).subscribe((res) => {
        this.navCtrl.popToRoot();
      }, (err) => {

      })
    }
  }
}
