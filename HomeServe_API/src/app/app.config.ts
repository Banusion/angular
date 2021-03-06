import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class AppConfig {

  private config: Object = null;
  private env:    Object = null;

  constructor(private http: Http) {

  }

  /**
   * Use to get the data found in the second file (config file)
   */
  public getConfig(key: any) {
    return this.config[key];
  }

  /**
   * Use to get the data found in the first file (env file)
   */
  public getEnv(key: any) {
    return this.env[key];
  }

  /**
   * This method:
   *   a) Loads "env.json" to get the current working environment (e.g.: 'production', 'development')
   *   b) Loads "config.[env].json" to get all env's variables (e.g.: 'config.development.json')
   */
  public load() {
    return new Promise((resolve) => {
      this.http.get('env.json').map( res => res.json() ).catch((error: any):any => {
        console.log('Configuration file "env.json" could not be read');
        resolve(true);
        return Observable.throw(error.json().error || 'Server error');
      }).subscribe( (envResponse) => {
        this.env = envResponse;
        let request:any = null;

        switch (this.getEnv('env')) {
          case 'production': {
            request = this.http.get('config.' + this.getEnv('env') + '.json');
          } break;

          case 'development': {
            request = this.http.get('config.' + this.getEnv('env') + '.json');
          } break;

          case 'default': {
            console.error('Environment file is not set or invalid');
            resolve(true);
          } break;
        }
        if (request) {
          request
            .map( (res: Response) => res.json() )
            .catch((error: any) => {
              console.error('Error reading ' + this.getEnv('env') + ' configuration file');
              resolve(error);
              return Observable.throw(error.json().error || 'Server error');
            })
            .subscribe((responseData: Response) => {
              this.config = responseData;
              resolve(true);
            });
        } else {
          console.error('Env config file "env.json" is not valid');
          resolve(true);
        }
      });

    });
  }
}
