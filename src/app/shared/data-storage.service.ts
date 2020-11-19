import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';

import { RunningTime } from '../stopwatch/model/running-time.model';
import { RunService } from '../stopwatch/run.service'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {
  constructor(private http: HttpClient, private runService: RunService) {}

  storeRuntimes() {
    const times = this.runService.getRunningTimes();
    this.http
      .put(
        environment.firebaseLink,
        times
      )
      .subscribe(response => {
        console.log(response);
      });
  }

  fetchRuntimes() {
    return this.http
      .get<RunningTime[]>(
        environment.firebaseLink,
      )
      .pipe(
        map(times => {
          return times.map(time => {
            return {
              ...time
            };
          });
        }),
        tap(times => {
          this.runService.setRunningTimes(times);
        })
      )
  }
}
