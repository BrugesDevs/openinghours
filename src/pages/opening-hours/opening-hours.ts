import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {OpeningHoursFacade} from "../facade/opening-hours.facade";

/**
 * Generated class for the OpeningHoursPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-opening-hours',
  template: `
    <ion-header>

      <ion-navbar>
        <ion-title>opening-hours</ion-title>
      </ion-navbar>

    </ion-header>


    <ion-content padding>
      <ion-row *ngFor="let day of facade.days" style="border-bottom: lightgray 1px solid" >
        <ion-label style="width: 50px;">{{day.dayName}}</ion-label>
        <ion-col>
          <ion-row *ngFor="let timeSlot of day.timeSlots">
            <ion-label text-right>{{timeSlot.getFormattedHours()}}</ion-label>
          </ion-row>
        </ion-col>
      </ion-row>
    </ion-content>
  `,
})
export class OpeningHoursPage {

}
