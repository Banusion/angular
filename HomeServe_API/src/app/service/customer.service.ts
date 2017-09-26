import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { AppConfig } from '../app.config';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';

import { Customer } from '../class/customer';

@Injectable()

export class CustomerService {

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


  getCustomers(): Promise<Customer[]> {
    return this.http.get(this.config.getConfig('api_url_customer') + '?phone=0615282387', this.authentication())
      .toPromise()
      .then(response => response.json().data as Customer[])
      .catch(this.handleError);
  }

  getCustomer(id: number): Promise<Customer> {
    const url = `${this.config.getConfig('api_url_customer')}/${id}`;
    return this.http.get(url, this.authentication())
      .toPromise()
      .then(response => response.json() as Customer)
      .catch(this.handleError);
  }

}
