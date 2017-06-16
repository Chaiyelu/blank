import { Component, OnInit, ViewChild } from '@angular/core';
import { ViewController, NavController, Slides, NavParams, Platform, ToastController } from "ionic-angular";
import { FormGroup, FormControl, FormBuilder, /*AbstractControl,*/ Validators } from '@angular/forms';
import { RegStep1Component } from "../regsiterpage/reg-step1/reg-step1.component";
import { UserService } from "../../../pages/user/user.service";
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

  private selected_segment = 0;
  public loginForm: FormGroup;
  mobile: any;
  password: any;
  top_segment = 'top_0';
  auth: Observable<Auth>;
  isLogin: boolean;

  rootNavCtrl: NavController;

  constructor(
    public navCtrl: NavController,
    public viewCtrl: ViewController,
    public navParams: NavParams,
    public platform: Platform,
    public formBuilder: FormBuilder,
    public userService: UserService,
    public toastCtrl: ToastController,
    public store$: Store<AppState>
  ) {
    this.selected_segment = navParams.data;
    this.platform = platform;
    this.loginForm = formBuilder.group({
      mobile: ['', Validators.compose([Validators.minLength(11), Validators.maxLength(11), Validators.required, Validators.pattern("^(13[0-9]|15[012356789]|17[03678]|18[0-9]|14[57])[0-9]{8}$")])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
    })
    this.mobile = this.loginForm.controls['mobile'];
    this.password = this.loginForm.controls['password'];
    this.auth = this.store$.select(appState => appState.auth);
    this.auth.subscribe((auth) => {
      this.isLogin = auth.isLogin;
    });
  }
  ngOnInit() {}

  ionViewDidEnter(){
    if (this.isLogin) {
      this.viewCtrl.dismiss();
    }
    this.select(this.selected_segment);
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

  doLogin() {
    if (this.loginForm.valid) {
      this.userService.login(this.loginForm.value).subscribe((res: any) => {
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
}
