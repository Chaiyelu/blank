import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { SITE_HOST_URL } from "../config/env.config";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class CheckcodeService {

  constructor(public http: Http) {
    console.log('Hello Vercode Provider');
  }

  sendCheckcode(mobile: string) {
    let body = { mobile: mobile };
    console.log(body);
    return this.http.post(`${SITE_HOST_URL}checkcodes`, body)
      .map((res: Response) => {
        console.log(res);
        return res;
      })
      .catch((error: any) => Observable.throw(error || 'Server error'));
  }

  checkCheckcode(mobile: string, code: string) {
    let params = new URLSearchParams();
    params.set('mobile',mobile);
    params.set('code', code);
    return this.http.get(`${SITE_HOST_URL}checkcodes`, { search: params })
      .map((res: Response) => {
        console.log(res);
        return res;
      })
      .catch((error: any) => Observable.throw(error || 'Server error'));
  }

}
