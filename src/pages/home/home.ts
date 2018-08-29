import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {DayModel} from "../../core/model/day.model";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  days: DayModel[] = [];

  constructor(public navCtrl: NavController) {
    const dayAbbreviations = ['ma', 'di', 'wo', 'do', 'vr', 'za', 'zo'];
    for (let i = 0; i < dayAbbreviations.length; i++) {
      this.days.push(new DayModel(dayAbbreviations[i]));
    }
  }

  addHourSlot(day: DayModel) {
    day.createTimeSlot();
  }
}
