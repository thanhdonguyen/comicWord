import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ComicsServiceProvider } from './../../providers/comics-service/comics-service';
import { ComicsChapterPage } from './../../pages/comics-chapter/comics-chapter';
import * as $ from 'jquery';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {

  public genreOfStory: any;
  public yes=false;
  public progressBar=true;

  constructor(public navCtrl: NavController, public navParams: NavParams, private comicsService: ComicsServiceProvider) {

  }
  ngOnInit(){
    this.comicsService.getComics()
      .subscribe(genreOfStory => {
        this.genreOfStory = genreOfStory;
      });
      // this.yes=true;
      // setTimeout(function(){
      //   this.yes=true;
      // }.bind(this),300)
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
      // this.progressBar=false;
      setTimeout(function(){
        this.progressBar=false;
      }.bind(this),500)
      
  }

  gotoChapter(storyNames) {
    this.navCtrl.push(ComicsChapterPage, storyNames);
  }
  doRefresh(refresher){
    this.comicsService.getComics()
    .subscribe(genreOfStory => {
      this.genreOfStory = genreOfStory;
      refresher.complete();
      // console.log(genreOfStory);
    });
  }
}
