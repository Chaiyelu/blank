import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { RatingQueryParams } from "../../../shared/models/rating.model";
import { AuthHttp } from 'angular2-jwt';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { SITE_HOST_URL } from "../../../shared/config/env.config";

@Injectable()
export class FoodSellerDetailService {

  public doChoose: EventEmitter<any> = new EventEmitter<any>();
  public doChoose1: EventEmitter<any> = new EventEmitter<any>();
  constructor(
    private http: Http,
    private authHttp: AuthHttp
  ) { }
  getSeller(sellerId) {
    return this.authHttp.get(`${SITE_HOST_URL}sellers/${sellerId}`)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error || 'Server error'));
  }

  //获取商品列表
  getGoodsList(sellerId) {
    let params = new URLSearchParams();
    params.set('sellerId', sellerId);
    console.log(params.toString()) // name=huge
    return this.http.get(`${SITE_HOST_URL}food_categories`, { search: params })
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error || 'Server error'));
  }

  //根据条件获取评论
  getRatings(queryParams: RatingQueryParams) {
    let params = new URLSearchParams();
    for (var key in queryParams) {
      if (queryParams.hasOwnProperty(key)) {
        params.append(key, queryParams[key]);
      }
    }
    console.log(params.toString())
    return this.http.get(`${SITE_HOST_URL}food_ratings`, { search: params })
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error || 'Server error'));
  }
}
