import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Store } from '@ngrx/store';
import { AppState } from "../../shared/domain/state";
import { Auth } from "../../shared/models/auth.model";

import { OrderHomeComponent } from "./order-home/order-home.component";
import { SigninComponent } from "./signin/signin.component";
import { UserService } from "../user/user.service";

@Component({
  selector: 'page-order',
  templateUrl: 'order.component.html'
})
export class OrderComponent implements OnInit {
  auth: Observable<Auth>;
  orderPage: any;
  constructor(
    public store$: Store<AppState>,
    public userService: UserService
  ) {
    this.auth = this.store$.select(appState => appState.auth);
    this.auth.map(auth => auth.isLogin).subscribe((isLogin) => {
      if (isLogin) {
        this.orderPage = OrderHomeComponent;
      } else {
        this.orderPage = SigninComponent;
      }
    });

  }

  ngOnInit() {
    this.userService.isLoggedIn();
  }

  ionViewDidEnter(){
    this.userService.isLoggedIn();
  }
}
