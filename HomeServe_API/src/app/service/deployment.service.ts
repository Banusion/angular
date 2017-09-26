import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { AppConfig } from '../app.config';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';

import { Deployments } from '../class/deployments';

@Injectable()

export class DeploymentService {

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

  getDeployment(id: string): Promise<Deployments> {
    const url = `${this.config.getConfig('api_url_deployment')}/${id}`;
    return this.http.get(url, this.authentication())
      .toPromise()
      .then(response => response.json() as Deployments)
      .catch(this.handleError);
  }

}
