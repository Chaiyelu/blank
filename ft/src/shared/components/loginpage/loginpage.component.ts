import { Component, OnInit, ViewChild } from '@angular/core';
import { ViewController, NavController, Slides, NavParams, Platform } from "ionic-angular";
import { FormGroup, FormControl, FormBuilder, AbstractControl, Validators } from '@angular/forms';
import { RegsiterpageComponent } from "../regsiterpage/regsiterpage.component";
import { UserService } from "../../../pages/user/user.service";

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
  segment = 'sites';

  rootNavCtrl: NavController;

  constructor(
    public navCtrl: NavController,
    public viewCtrl: ViewController,
    public navParams: NavParams,
    public platform: Platform,
    public formBuilder: FormBuilder,
    public userService: UserService
  ) {
    this.rootNavCtrl = navParams.get('rootNavCtrl');
    this.platform = platform;
    this.loginForm = formBuilder.group({
      mobile: ['', Validators.compose([Validators.minLength(11), Validators.maxLength(11), Validators.required, Validators.pattern("^(13[0-9]|15[012356789]|17[03678]|18[0-9]|14[57])[0-9]{8}$")])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
    })
    this.mobile = this.loginForm.controls['mobile'];
    this.password = this.loginForm.controls['password'];
  }
  ngOnInit() { }

  select(index) {
    if (index === 2) {
      this.top_segment = 'top_2';
    }
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
    if (currentIndex === 2) {
      this.top_segment = 'top_2';
    }
    if (currentIndex === 1) {
      this.top_segment = 'top_1';
    }
    if (currentIndex === 0) {
      this.top_segment = 'top_0';
    }
  }

  doLogin(){
    if (this.loginForm.valid) {
      this.userService.login(this.loginForm.value).subscribe((res: any) => {
        //let body = res.json();
        if (res && res.success) {

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
    this.navCtrl.push(RegsiterpageComponent);
  }
}
