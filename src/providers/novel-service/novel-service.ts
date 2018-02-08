import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the NovelServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NovelServiceProvider {

	private url: string = "./assets/api/novels.json";

  constructor(public http: Http) {
    console.log('Hello NovelServiceProvider Provider');
    this.http = http;
  }
  getNovel(){
    return this.http.get(this.url).map(response => response.json());
  }

}
