import { Component, OnInit } from '@angular/core';
import { NavParams, ViewController } from "ionic-angular";

import { UserService } from "../../user.service";

@Component({
  selector: 'username',
  templateUrl: 'username.component.html'
})

export class UsernameComponent implements OnInit {
  username: string = '';
  backupUsername: string;
  constructor(
    public navParams: NavParams,
    public viewCtrl: ViewController,
    private userService: UserService
  ) {
    this.backupUsername = navParams.get('username');
  }

  ngOnInit() {
    this.username = this.backupUsername;
  }

  doSubmit() {
    this.userService.saveUserInfo({ username: this.username }).subscribe((result) => {
      if (201 == result.status) {
        this.backupUsername = this.username;
        this.viewCtrl.dismiss(this.username);
      }
    })
  }

  doClose() {
    this.viewCtrl.dismiss(this.backupUsername);
  }
}
