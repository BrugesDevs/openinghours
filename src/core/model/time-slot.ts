export class TimeSlot {
  private _openingsHour: string;
  private _closingHour: string;

  constructor(open: string, close: string) {
    this._openingsHour = open;
    this._closingHour = close;
  }

  get openingsHour(): string {
    return this._openingsHour;
  }

  set openingsHour(value: string) {
    this._openingsHour = value;
  }

  get closingHour(): string {
    return this._closingHour;
  }

  set closingHour(value: string) {
    this._closingHour = value;
  }

  hasFormattedHours(): boolean{
    return this.openingsHour?true:false || this.closingHour?true:false;
}

  getFormattedHours(): string {
    if (this.hasFormattedHours()) {
      return this._openingsHour + " - " + this._closingHour;
    } else {
      return"";
    }
  }
}
