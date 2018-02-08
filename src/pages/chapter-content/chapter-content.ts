import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import * as $ from 'jquery';

/**
 * Generated class for the ChapterContentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-chapter-content',
  templateUrl: 'chapter-content.html',
})
export class ChapterContentPage {

  public storyName: any[] = [];
  public yes = false;
  public progressBar = true;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ngOnInit() {
    // console.log(this.navParams.data);
    this.storyName = this.navParams.data;
    // console.log(this.storyName);
    $(document).ready(function () {
      var lp = 0,
        progress = setInterval(function () {
          $('.progress-outer .progress-inner').css({ 'width': lp + '%' })
          if (lp == 100) {
            clearInterval(progress);
          }
          else {
            lp = lp + 1;
          }
        });
    });
    this.yes = true;
    // this.progressBar=false;

    setTimeout(function () {
      this.progressBar = false;
    }.bind(this), 1000)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChapterContentPage');
  }
  doRefresh(refresher) {
    this.storyName = this.navParams.data;
    refresher.complete();
  }

}
