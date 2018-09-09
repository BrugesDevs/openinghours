import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {OpeningHourManagementPage} from "./opening-hour-management";

@NgModule({
  declarations: [
    OpeningHourManagementPage
  ],
  imports: [
    IonicPageModule.forChild(OpeningHourManagementPage),
  ],
})
export class OpeningHoursManagementModule {}
