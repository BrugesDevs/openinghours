import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {DayModel} from "../../core/model/day.model";
import {OpeningHoursFacade} from "../facade/opening-hours.facade";

@Component({
  selector: 'page-opening-hours-management',
  templateUrl: './opening-hours-management.html'
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
