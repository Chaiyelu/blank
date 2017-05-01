import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Sellerratings } from './sellerratings.model';

@Injectable()
export class SellerratingsService {

	constructor(private http: Http) { }

}
