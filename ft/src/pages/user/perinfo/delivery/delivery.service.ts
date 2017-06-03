import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AuthHttp } from 'angular2-jwt';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { SITE_HOST_URL } from "../../../../shared/config/env.config";
import { DeliveryModel } from "../../../../shared/models/delivery.model";

@Injectable()
export class DeliveryService {

  constructor(
    private http: Http,
    private authHttp: AuthHttp
  ) { }

  //根据条件获取评论
  getDeliveryByUserId() {
    return this.authHttp.get(`${SITE_HOST_URL}deliveries`)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error || 'Server error'));
  }

  saveDelivery(delivery: DeliveryModel) {
    if (delivery.id) {
      return this.authHttp.put(`${SITE_HOST_URL}deliveries`, JSON.stringify(delivery))
        .map((res: Response) => res)
        .catch((error: any) => Observable.throw(error || 'Server error'));

    } else {
      return this.authHttp.post(`${SITE_HOST_URL}deliveries`, JSON.stringify(delivery))
        .map((res: Response) => res)
        .catch((error: any) => Observable.throw(error || 'Server error'));
    }
  }

  delDelivery(id: number) {
    return this.authHttp.delete(`${SITE_HOST_URL}deliveries/${id}`)
      .map((res: Response) => res)
      .catch((error: any) => Observable.throw(error || 'Server error'));
  }
}
