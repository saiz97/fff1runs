import { Injectable } from '@angular/core';
import { RunningTime } from './model/running-time.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RunService {
  timesChanged = new Subject<RunningTime[]>();
  private runtimes: RunningTime[] = [];

  constructor() { }

  getRunningTimes() {
    return this.runtimes.slice();
  }

  getRunningTime(index: number) {
    return this.runtimes[index];
  }

  setRunningTimes(times: RunningTime[]) {
    this.runtimes = times;
    this.timesChanged.next(this.runtimes.slice());
  }

  addRunningTime(time: RunningTime) {
    this.runtimes.push(time);
    this.timesChanged.next(this.runtimes.slice());
    console.table(this.runtimes);
  }
}
