import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ComicsChapterPage } from '../pages/comics-chapter/comics-chapter';
import { ChapterContentPage } from '../pages/chapter-content/chapter-content';
import { AboutPage } from '../pages/about/about';
import { NovelPage } from '../pages/novel/novel';
import { SagaPage } from '../pages/saga/saga';
import { FavouritePage } from '../pages/favourite/favourite';
import { ContentPage } from '../pages/content/content';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ComicsServiceProvider } from '../providers/comics-service/comics-service';
import { NovelServiceProvider } from '../providers/novel-service/novel-service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ComicsChapterPage,
    ChapterContentPage,
    AboutPage,
    NovelPage,
    SagaPage,
    FavouritePage,
    ContentPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    FormsModule,
    HttpModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    ComicsChapterPage,
    ChapterContentPage,
    AboutPage,
    NovelPage,
    SagaPage,
    FavouritePage,
    ContentPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ComicsServiceProvider,
    NovelServiceProvider
  ]
})
export class AppModule {}
