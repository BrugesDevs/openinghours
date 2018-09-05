import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';

import {MyApp} from './app.component';
import {OpeningHoursManagementPage} from '../pages/opening-hours-management/opening-hours-management';
import {TabsPage} from "../pages/tabs/tabs";
import {OpeningHoursFacade} from "../pages/facade/opening-hours.facade";
import {OpeningHoursPage} from "../pages/opening-hours/opening-hours";

@NgModule({
  declarations: [
    MyApp,
    OpeningHoursManagementPage,
    TabsPage,
    OpeningHoursPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    OpeningHoursManagementPage,
    TabsPage,
    OpeningHoursPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    OpeningHoursFacade,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
