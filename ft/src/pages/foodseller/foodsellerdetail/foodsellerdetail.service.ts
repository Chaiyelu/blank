import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class FoodSellerDetailService {

  public doChoose: EventEmitter<any> = new EventEmitter<any>();
  public doChoose1: EventEmitter<any> = new EventEmitter<any>();
  constructor(private http: Http) { }
  getSeller(sellerId) {
    return this.http.get('http://localhost:3011/seller/'+ sellerId)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error || 'Server error'));
  }

  getGoodsList(sellerId) {
    let params = new URLSearchParams();
    params.set('sellerId', sellerId);
    console.log(params.toString()) // name=huge
    return this.http.get('http://localhost:3011/food_categories', { search: params })
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error || 'Server error'));
  }

}
