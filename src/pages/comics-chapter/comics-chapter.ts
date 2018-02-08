import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ChapterContentPage } from './../../pages/chapter-content/chapter-content';
import { Storage } from '@ionic/storage';
import { AlertController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

/**
 * Generated class for the ComicsChapterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-comics-chapter',
  templateUrl: 'comics-chapter.html',
})
export class ComicsChapterPage {

  public storyNames: any;
  public favorite: any[] = [];
  public isFavorite: boolean = false  ;
  public noneFavorite: boolean = true ;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    private storage: Storage, 
    public alertCtrl: AlertController,
    private toastCtrl: ToastController
  ) {
  }

  ngOnInit() {
    // console.log(this.navParams.data);
    this.storyNames = this.navParams.data;
    console.log(this.storyNames.id);

    this.storage.forEach( (value, key, index) => {
      if(key == this.storyNames.id){
        this.isFavorite = true;
        this.noneFavorite = false;
      }
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ComicsChapterPage');
  }

  gotoChapterContent(storyName) {
    this.navCtrl.push(ChapterContentPage, storyName);
  }

  addtoFavorite(storyNames) {
    // let alert = this.alertCtrl.create({
    //   subTitle: storyNames.name + ' added to list favourite !',
    //   buttons: [
    //     {
    //       text: 'OK',
    //       handler: () => {
    //         this.isFavorite = true;
    //         this.noneFavorite = false;
    //       }
    //     }
    //   ]
    // });
    // alert.present();
    // console.log(storyNames);
    this.favorite = storyNames;
    this.storage.set(storyNames.id, JSON.stringify(this.favorite));
    this.isFavorite = true;
    this.noneFavorite = false;
    let toast = this.toastCtrl.create({
      message: 'added to favorite',
      duration: 3000,
      position: 'bottom'
    });
    toast.present();
  }
  removeFavorite(id){
    this.storage.remove(id);
    this.isFavorite = false;
    this.noneFavorite = true;
    let toast = this.toastCtrl.create({
      message: 'remove favorite',
      duration: 3000,
      position: 'bottom',
      cssClass: 'remove',
    });
    toast.present();
  }

}
