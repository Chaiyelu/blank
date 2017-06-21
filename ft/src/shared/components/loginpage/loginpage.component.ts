import { Component, OnInit, ViewChild } from '@angular/core';
import { ViewController, NavController, Slides, NavParams, Platform, ToastController, AlertController } from "ionic-angular";
import { FormGroup, FormControl, FormBuilder, /*AbstractControl,*/ Validators } from '@angular/forms';
import { RegStep1Component } from "../regsiterpage/reg-step1/reg-step1.component";
import { UserService } from "../../../pages/user/user.service";
import { CheckcodeService } from "../../service/checkcode.service";
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { AppState } from "../../domain/state";
import { Auth } from "../../models/auth.model";

@Component({
  selector: 'loginpage',
  templateUrl: 'loginpage.component.html'
})

export class LoginpageComponent implements OnInit {
  @ViewChild('mySlider') slider: Slides;

  selected_segment = 0;
  loginForm: FormGroup;
  loginFormByCheckcode: FormGroup;
  mobile: any;
  password: any;
  top_segment: string = 'top_0';
  auth: Observable<Auth>;
  isLogin: boolean;
  isSended: boolean = false;
  //获取验证码按钮
  btnStatus: boolean = true;
  btnText: string = '获取验证码';
  time: number = 90;

  rootNavCtrl: NavController;

  constructor(
    public navCtrl: NavController,
    public viewCtrl: ViewController,
    public alertCtrl: AlertController,
    public navParams: NavParams,
    public platform: Platform,
    public formBuilder: FormBuilder,
    public userService: UserService,
    public checkcodeService: CheckcodeService,
    public toastCtrl: ToastController,
    public store$: Store<AppState>,
  ) {
    this.selected_segment = navParams.get('currentPage');
    this.isSended = navParams.get('isSended');
    this.platform = platform;
    this.loginForm = formBuilder.group({
      mobile: ['', Validators.compose([Validators.minLength(11), Validators.maxLength(11), Validators.required, Validators.pattern("^(13[0-9]|15[012356789]|17[03678]|18[0-9]|14[57])[0-9]{8}$")])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
    })
    this.loginFormByCheckcode = formBuilder.group({
      mobile: ['', Validators.compose([Validators.minLength(11), Validators.maxLength(11), Validators.required, Validators.pattern("^(13[0-9]|15[012356789]|17[03678]|18[0-9]|14[57])[0-9]{8}$")])],
      code: ['', Validators.compose([Validators.required, Validators.maxLength(6), Validators.minLength(6)])]
    })
    this.mobile = this.loginFormByCheckcode.controls['mobile'];
    // this.password = this.loginForm.controls['password'];
    this.auth = this.store$.select(appState => appState.auth);
    this.auth.subscribe((auth) => {
      this.isLogin = auth.isLogin;
    });
  }
  ngOnInit() { }

  ionViewDidEnter() {
    if (this.isLogin) {
      this.viewCtrl.dismiss();
    }
    this.select(this.selected_segment);
    if (this.isSended) {
      this._disableBtn();
    }
  }

  select(index) {
    if (index === 1) {
      this.top_segment = 'top_1';
    }
    if (index === 0) {
      this.top_segment = 'top_0';
    }
    this.slider.slideTo(index, 500);
  }

  select_segment(index) {
    this.selected_segment = index;
    console.log("this.selected_segment: " + this.selected_segment);
  }

  onSlideChanged($event) {
    if (((($event.touches.startX - $event.touches.currentX) <= 100) || (($event.touches.startX - $event.touches.currentX) > 0)) && (this.slider.isBeginning() || this.slider.isEnd())) {
      console.log("interdit Direction");
    }
    else {
      console.log("OK Direction");
    }

  }

  panEvent(e) {
    let currentIndex = this.slider.getActiveIndex();
    if (currentIndex === 1) {
      this.top_segment = 'top_1';
    }
    if (currentIndex === 0) {
      this.top_segment = 'top_0';
    }
  }

  doLogin(value: Object) {
    if (this.loginForm.valid) {
      this.userService.login(value).subscribe((res: any) => {
        //let body = res.json();
        if (res && res.success) {
          this.viewCtrl.dismiss();
        } else {
          let toast = this.toastCtrl.create({
            message: res.message,
            duration: 3000,
            position: 'middle',
            cssClass: 'login-toast'
          });
          toast.present();
        }
      }, error => {
        console.error(error);
      });;
    }
  }

  doClose() {
    this.viewCtrl.dismiss();
  }

  doRegsiter() {
    this.navCtrl.push(RegStep1Component);
  }

  getCheckcode() {
    this.checkcodeService.sendCheckcode(this.loginFormByCheckcode.value.mobile).subscribe((res) => {
      if (201 == res.status) {
        this._disableBtn();
        let alert = this.alertCtrl.create({
          message: '验证码发送成功，请查收',
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

}
