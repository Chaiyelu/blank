import { Component, OnInit } from '@angular/core';
import { NavParams, ViewController } from "ionic-angular";

import { UserService } from "../../user.service";

@Component({
	selector: 'birthday',
	templateUrl: 'birthday.component.html'
})

export class BirthdayComponent implements OnInit {
  birthday: string = '';
  backupBirthday: string;
  constructor(
    public navParams: NavParams,
    public viewCtrl: ViewController,
    private userService: UserService
  ) {
    this.backupBirthday = navParams.get('birthday');
  }

	ngOnInit() {
    this.birthday = this.backupBirthday;
  }

  doSubmit() {
    this.userService.saveUserInfo({ birthday: this.birthday }).subscribe((result) => {
      if (201 == result.status) {
        this.backupBirthday = this.birthday;
        this.viewCtrl.dismiss(this.birthday);
      }
    })
  }

  doClose() {
    this.viewCtrl.dismiss(this.backupBirthday);
  }
}
