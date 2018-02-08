import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NovelServiceProvider } from './../../providers/novel-service/novel-service';
import { ContentPage } from './../../pages/content/content';


@Component({
  selector: 'page-novel',
  templateUrl: 'novel.html',
})
export class NovelPage {

	public genreOfStory: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private novelService: NovelServiceProvider) {

  }

  ngOnInit(){
    this.novelService.getNovel()
      .subscribe(genreOfStory => {
        this.genreOfStory = genreOfStory;
      });
  }

  gotoContent(storyNames) {
    this.navCtrl.push(ContentPage, storyNames);
    //console.log(this.storyNames);
  }

}
