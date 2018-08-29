import {TimeSlot} from "./time-slot";

export class DayModel {

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
    this._timeSlots = [];
    this._timeSlots.push(new TimeSlot("00:00", "00:00"));
  }

  createTimeSlot() {
    this._timeSlots.push(new TimeSlot("", ""));
  }
}
