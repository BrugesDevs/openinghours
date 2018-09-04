import {Injectable} from "@angular/core";
import {DayModel} from "../../core/model/day.model";
import {TimeSlot} from "../../core/model/time-slot";

@Injectable()
export class OpeningHoursFacade {

  days: DayModel[] = [];

  constructor() {
    const dayAbbreviations = ['maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag', 'zondag'];
    let day;

    for (let i = 0; i < dayAbbreviations.length; i++) {
      day = new DayModel(dayAbbreviations[i]);
      if (i % 2 === 0) {
        if (i === 2) {
          day.addTimeSlot(new TimeSlot("0" + i + ":00", "0" + (i + 3) + ":30"));
        }
        if (i === 4) {
          day.addTimeSlot(new TimeSlot("0" + i + ":00", "0" + (i + 3) + ":30"));
          day.addTimeSlot(new TimeSlot( (i + 6) + ":00",  (i + 9) + ":30"));
        }
        if (i === 6) {
          day.addTimeSlot(new TimeSlot("0" + i + ":00", "0" + (i + 3) + ":30"));
          day.addTimeSlot(new TimeSlot((i + 4) + ":00", (i + 5) + ":30"));
          day.addTimeSlot(new TimeSlot((i + 6) + ":00", (i + 9) + ":30"));
        }
      }
      this.days.push(day);
    }
  }

  addHourSlot(day: DayModel) {
    day.createTimeSlot();
  }

}
