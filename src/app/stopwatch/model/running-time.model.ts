import { Lap } from "./lap.model";

export class RunningTime {
  date: Date;
  laps: Lap[];

  constructor(date: Date, laps: Lap[]) {
    this.date = date;
    this.laps = laps;
  }
}
