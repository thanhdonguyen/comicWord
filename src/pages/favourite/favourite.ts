import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ComicsChapterPage } from './../../pages/comics-chapter/comics-chapter';
import { Storage } from '@ionic/storage';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the FavouritePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-favourite',
  templateUrl: 'favourite.html',
})
export class FavouritePage {

  public favoriteInfo: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavouritePage');
  }

  ngOnInit() {
    // console.log(this.storyNames);
    var index = 0;
    this.storage.forEach((v, k, i) => {
      // console.log(JSON.parse(v));
      this.favoriteInfo[index] = JSON.parse(v);
      index++;
    })
    console.log(this.favoriteInfo);

  }

  gotoChapter(storyNames) {
    this.navCtrl.push(ComicsChapterPage, storyNames);
  }

  removeFavorite(id) {
    let confirm = this.alertCtrl.create({
      title: 'Are you sure want to delete?',
      buttons: [
        {
          text: 'No',
        },
        {
          text: 'Yes',
          handler: () => {
            this.storage.remove(id);
            this.navCtrl.setRoot(this.navCtrl.getActive().component);
          }
        }
      ]
    });
    confirm.present();
  }
  // this.storage.remove(id);
  doRefresh(refresher){
    var index = 0;
    this.storage.forEach((v, k, i) => {
      // console.log(JSON.parse(v));
      this.favoriteInfo[index] = JSON.parse(v);
      index++;
    })
    refresher.complete();
  }

}
