import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { AppConfig } from '../app.config';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';

import { Policies } from '../class/policies';

@Injectable()

export class PolicyService {

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
  ) { }

  getPolicies(): Promise<Policies[]> {
    return this.http.get(this.config.getConfig('api_url_policy') + '?phone=0615282387', this.authentication())
      .toPromise()
      .then(response => response.json().data as Policies[])
      .catch(this.handleError);
  }

  getPolicy(id: number): Promise<Policies> {
    const url = `${this.config.getConfig('api_url_policy')}/${id}`;
    return this.http.get(url, this.authentication())
      .toPromise()
      .then(response => response.json() as Policies)
      .catch(this.handleError);
  }

}
