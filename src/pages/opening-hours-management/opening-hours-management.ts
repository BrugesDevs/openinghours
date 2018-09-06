import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {DayModel} from "../../core/model/day.model";
import {OpeningHoursFacade} from "../facade/opening-hours.facade";

@Component({
  selector: 'page-opening-hours-management',
  template: `<ion-header>
    <ion-navbar>
      <ion-title>
        Openingsuren
      </ion-title>
    </ion-navbar>
  </ion-header>

  <ion-content padding>
    <ion-card padding *ngFor="let day of facade.days">
      <ion-row align-items-center (click)="day.toggleOpen()">
        <ion-label style="width: 100px;">{{day.dayName | titlecase}}</ion-label>
        <ion-list float-right>
          <ion-item *ngFor="let slot of day.timeSlots">
            <ion-label no-margin no-padding>
              {{slot.getFormattedHours()}}
            </ion-label>
          </ion-item>
        </ion-list>
        <ion-icon [name]="displayIcon(day)" color="favorite" item-right
                  float-right
                  style="margin-left: 8px;"></ion-icon>
      </ion-row>
      <ion-card-content *ngIf="day.open">
        <ion-row style="max-width: 300px;" *ngFor="let timeslot of day.timeSlots">
          <ion-col>
            <ion-datetime displayFormat="HH mm" placeholder="Openingsuur"
                          [(ngModel)]="timeslot.openingsHour"></ion-datetime>
          </ion-col>
          <ion-col>
            <p style="text-align: center;">-</p>
          </ion-col>
          <ion-col>
            <ion-datetime displayFormat="HH mm" placeholder="Sluitingsuur"
                          [(ngModel)]="timeslot.closingHour"></ion-datetime>
          </ion-col>
          <ion-col>
            <button ion-button clear (click)="day.deleteTimeSlot(timeslot)">
              <ion-icon name="close-circle"></ion-icon>
            </button>
          </ion-col>
        </ion-row>

        <ion-row align-items-center>
          <button clear ion-button (click)="addHourSlot(day)" [disabled]="day.isOpenFor24hours">Voeg tijden toe</button>
        </ion-row>

        <ion-row>
          <ion-item>
            <ion-label>Is 24 uur open</ion-label>
            <ion-checkbox [(ngModel)]="day.isOpenFor24hours"></ion-checkbox>
          </ion-item>
        </ion-row>

      </ion-card-content>
    </ion-card>

  </ion-content>
  `
})
export class OpeningHoursManagementPage {

  constructor(public navCtrl: NavController,
              private facade: OpeningHoursFacade) {
  }

  addHourSlot(day: DayModel) {
    this.facade.addHourSlot(day);
  }

  displayIcon(day: DayModel) {
    return day.open ? 'arrow-dropup' : 'arrow-dropdown';
  }
}
