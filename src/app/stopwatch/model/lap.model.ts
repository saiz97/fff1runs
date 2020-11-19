export class Lap {
  minutes: String;
  seconds: String;
  milliseconds: String;

  constructor(minutes: String, seconds: String, milliseconds: String) {
    this.minutes = minutes;
    this.seconds = seconds;
    this.milliseconds = milliseconds;
  }
}
