import { Component, OnInit } from '@angular/core';
import { NavController } from "ionic-angular";
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { AppState } from "../../shared/domain/state";
import { Auth } from "../../shared/models/auth.model";
import { PerinfoComponent } from "./perinfo/perinfo.component";
import { UserModel } from "../../shared/models/user.model";
import { ImagePicker } from '@ionic-native/image-picker';

@Component({
  selector: 'user',
  templateUrl: 'user.component.html'
})

export class UserComponent implements OnInit {
  auth: Observable<Auth>;
  userInfo: object;
  aaa: any = '';
  constructor(
    public navCtrl: NavController,
    public store$: Store<AppState>,
    private imagePicker: ImagePicker
  ) {
    this.auth = this.store$.select(appState => appState.auth);
    this.auth.subscribe((auth) => {
      if (auth.isLogin) {
        this.userInfo = auth.user;
      } else {
        this.userInfo = <UserModel>{};
      }
    });
  }

  ngOnInit() { }

  goToPerInfo() {
    this.navCtrl.push(PerinfoComponent);
  }

  onScroll($event) {

  }

  uploadImage() {
    this.aaa = 'aaaaa';
    this.imagePicker.getPictures({maximumImagesCount:1}).then((results) => {
      for (var i = 0; i < results.length; i++) {
        console.log('Image URI: ' + results[i]);
      }
    }, (err) => { });
  }
}
