import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

//data model
import { ModelModule } from './model/model.module';

import { MyApp } from './app.component';
import { MonsterSprite } from '../pages/monster-sprite/monster-sprite';
import { HomePage } from '../pages/home/home';
import { SelectCharPage } from '../pages/select-char/select-char';
import { GamePage } from '../pages/game/game';

@NgModule({
  declarations: [
    MyApp,
    MonsterSprite,
    HomePage,
    SelectCharPage,
    GamePage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    ModelModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MonsterSprite,
    HomePage,
    SelectCharPage,
    GamePage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
