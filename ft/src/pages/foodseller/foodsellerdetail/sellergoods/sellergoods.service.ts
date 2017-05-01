import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Sellergoods } from './sellergoods.model';

@Injectable()
export class SellergoodsService {

	constructor(private http: Http) { }

	getList(): Observable<Sellergoods[]> {
		return this.http.get('/api/list').map(res => res.json() as Sellergoods[]);
	}
}