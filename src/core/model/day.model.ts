import {TimeSlot} from "./time-slot";

export class DayModel {

  open: boolean = false;

  private readonly _dayName: string;
  private _timeSlots: TimeSlot[] = [];
  private _isOpenFor24hours: boolean = false;

  constructor(dayName: string) {
    this._dayName = dayName;
  }

  deleteSlot(timeSlot: TimeSlot) {
    this._timeSlots = this._timeSlots.splice(this._timeSlots.indexOf(timeSlot), 1);
  }

  addSlot(timeSlot: TimeSlot) {
    this._timeSlots.push(timeSlot);
  }

  toggleOpen() {
    this.open = !this.open;
  }

  get timeSlots(): TimeSlot[] {
    return this._timeSlots;
  }

  get dayName(): string {
    return this._dayName;
  }

  get isOpenFor24hours(): boolean {
    return this._isOpenFor24hours;
  }

  set isOpenFor24hours(value: boolean) {
    this._isOpenFor24hours = value;
    if (value) {
      this._timeSlots = [];
      this._timeSlots.push(new TimeSlot("00:00", "00:00"));
    } else {
      this._timeSlots = [];
    }
  }

  createTimeSlot() {
    this._timeSlots.push(new TimeSlot("", ""));
  }

  getFormattedHours(): string {
    let hours = "";
    for (let i = 0; i < this._timeSlots.length; i++) {
      hours += this._timeSlots[i].getFormattedHours();
      if (i != this.timeSlots.length - 1) {
        hours += "   ";
      }
    }
    return hours;
  }
}
