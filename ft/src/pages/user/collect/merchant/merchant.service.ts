import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { tokenNotExpired, AuthHttp } from 'angular2-jwt';
import { Storage } from "@ionic/storage";
import { Store } from '@ngrx/store';
import { AppState } from "../../shared/domain/state";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { SITE_HOST_URL } from "../../../../shared/config/env.config";

@Injectable()
export class CollectionMerchantService {

    constructor(
        private authHttp: AuthHttp
    ) { }


    /**
     * 获取商家收藏列表
     */
    getMerchantCollections() {
        return this.authHttp.get(`${SITE_HOST_URL}user_collections`)
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error || 'Server error'));
    }

    addMerchantCollections(merchantType, merchantId) {
        return this.authHttp.post(`${SITE_HOST_URL}user_collections`, { 'merchantType': merchantType, 'merchantId': merchantId })
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error || 'Server error'));
    }

    delMerchantCollections(id: any) {
        let params = new URLSearchParams();
        params.set('id', id);
        return this.authHttp.delete(`${SITE_HOST_URL}user_collections`, { search: params })
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error || 'Server error'));
    }

}