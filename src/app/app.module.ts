import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';


import { HomePageModule } from '../pages/home/home.module';
import { DataModalPageModule } from '../pages/data-modal/data-modal.module';

@NgModule({
  declarations: [
    MyApp,

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HomePageModule,
    DataModalPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
   
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
