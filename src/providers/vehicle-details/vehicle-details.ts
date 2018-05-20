import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the VehicleDetailsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class VehicleDetailsProvider {

  constructor(public http: HttpClient) {
  }

  public getDetails(first, second) {
    return this.http.get('http://34.219.0.228:8080', {params: {first: first, second: second}});
  }

}
