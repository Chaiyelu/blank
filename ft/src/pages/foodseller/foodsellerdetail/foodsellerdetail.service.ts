import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { RatingQueryParams } from "../../../shared/models/rating.model";
import { AuthHttp } from 'angular2-jwt';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class FoodSellerDetailService {

  public doChoose: EventEmitter<any> = new EventEmitter<any>();
  public doChoose1: EventEmitter<any> = new EventEmitter<any>();
  constructor(
    private http: Http,
    private authHttp: AuthHttp
  ) { }
  getSeller(sellerId) {
    return this.authHttp.get('http://localhost:3011/seller/' + sellerId)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error || 'Server error'));
  }

  getGoodsList(sellerId) {
    let params = new URLSearchParams();
    params.set('sellerId', sellerId);
    console.log(params.toString()) // name=huge
    return this.authHttp.get('http://localhost:3011/food_categories', { search: params })
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
    return this.authHttp.get('http://localhost:3011/food_ratings', { search: params })
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error || 'Server error'));
  }
}
