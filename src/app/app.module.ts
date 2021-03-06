import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { ScreenOrientation } from '@ionic-native/screen-orientation'

//data model
import { ModelModule } from './model/model.module';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SelectCharPage } from '../pages/select-char/select-char';
import BackgroundTabletComponent from '../pages/select-char/background/background-tablet.component';
import BackgroundMobileComponent from '../pages/select-char/background/background-mobile.component';
import { GamePage } from '../pages/game/game';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SelectCharPage,
    GamePage,
    BackgroundMobileComponent,
    BackgroundTabletComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    ModelModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SelectCharPage,
    GamePage,
    BackgroundMobileComponent,
    BackgroundTabletComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ScreenOrientation,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
