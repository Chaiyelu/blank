import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { tokenNotExpired } from 'angular2-jwt';
import { Storage } from "@ionic/storage";
import { Store } from '@ngrx/store';
import { AppState } from "../../shared/domain/state";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class UserService {
  public userLoginUrl = "http://localhost:3011/auth";

  constructor(
    private http: Http,
    private storage: Storage,
    private store$: Store<AppState>
  ) { }

  login(data: Object) {
    let body = JSON.stringify(data);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return new Observable((observer: Observer<any>) => {
      this.http.post(this.userLoginUrl, body, { headers }).subscribe(res => {
        let result = res.json();
        if (result && result.success) {
          if (result && result.token) {
            localStorage.setItem("token", result.token);
            // this.storage.set("token", result.token);
            this.store$.dispatch({
              type: 'LOGIN',
              payload: {
                user: null,
                isLogin: true,
                errMsg: null,
                redirectUrl: null
              }
            });
          }
          observer.next(result);
          observer.complete();
        }
      });
    });
  }

  isLoggedIn() {
    this.store$.dispatch({
      type: 'LOGIN',
      payload: {
        user: null,
        isLogin: tokenNotExpired(),
        errMsg: null,
        redirectUrl: null
      }
    });

    // this.storage.get("token").then((token) => {
    //   this.store$.dispatch({
    //     type: 'LOGIN',
    //     payload: {
    //       user: null,
    //       isLogin: tokenNotExpired(null, token),
    //       errMsg: null,
    //       redirectUrl: null
    //     }
    //   });
    // });

  }

}
