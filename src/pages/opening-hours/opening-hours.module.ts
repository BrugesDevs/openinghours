import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OpeningHoursPage } from './opening-hours';

@NgModule({
  declarations: [
    OpeningHoursPage,
  ],
  imports: [
    IonicPageModule.forChild(OpeningHoursPage),
  ],
})
export class OpeningHoursPageModule {}
