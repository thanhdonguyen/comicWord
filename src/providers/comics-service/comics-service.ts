import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the ComicsServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ComicsServiceProvider {

  private url: string = "./assets/api/stories.json";

  constructor(public http: Http) {
    console.log('Hello ComicsServiceProvider Provider');
    this.http = http;
  }
  getComics(){
    return this.http.get(this.url).map(response => response.json());
  }

}
