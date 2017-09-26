import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { AppConfig } from '../app.config';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Customer } from '../class/customer';

@Injectable()
export class CustomerSearchService {

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  private authentication() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization',this.config.getConfig('api_token'));
    let options = new RequestOptions({ headers: headers });
    return options;
  }

  constructor(
    private http: Http,
    private config: AppConfig
  ) {}

  search(term: string): Observable<Customer[]> {
    return this.http
      .get(this.config.getConfig('api_url_customer') + `?lastName=${term}`, this.authentication())
      .map(response => response.json().data as Customer[]);
  }
}
