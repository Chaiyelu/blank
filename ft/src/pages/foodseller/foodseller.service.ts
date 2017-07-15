import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { SITE_HOST_URL } from "../../shared/config/env.config";

@Injectable()
export class FoodSellerService {
  constructor(private http: Http) { }
  getSeller(){
    return this.http.get(`${SITE_HOST_URL}sellers`)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error || 'Server error'));
  }
}
