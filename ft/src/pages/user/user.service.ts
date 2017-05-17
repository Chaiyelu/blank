import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { tokenNotExpired } from 'angular2-jwt';
import { Storage } from "@ionic/storage";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class UserService {
  public userLoginUrl = "http://localhost:3011/auth";

  constructor(
    private http: Http,
    private storage: Storage
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
            // localStorage.setItem("token",result.token);
            this.storage.set("token",result.token);
          }
          observer.next(result);
          observer.complete();
        }
      });
    });
  }

  isLoggedIn() {
    return tokenNotExpired();
  }

}
