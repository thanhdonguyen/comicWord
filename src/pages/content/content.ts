import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import * as $ from 'jquery';

/**
 * Generated class for the ContentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-content',
  templateUrl: 'content.html',
})
export class ContentPage {

  public storyNames : any[] = [];
  public yes=false;
  public progressBar=true;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ngOnInit(){
    //console.log(this.navParams.data);
    this.storyNames = this.navParams.data;
    console.log(this.storyNames);
    $(document).ready(function(){
      var lp=0,
      progress=setInterval(function(){
        $('.progress-outer .progress-inner').css({'width':lp+'%'})
        if(lp==100){
          clearInterval(progress);
        }
        else{
          lp=lp+1;
        }
      });
    });
    this.yes=true;
    this.progressBar=false;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContentPage');
  }

}
