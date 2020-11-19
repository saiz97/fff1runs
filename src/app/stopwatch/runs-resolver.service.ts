import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { RunningTime } from './model/running-time.model';
import { DataStorageService } from '../shared/data-storage.service';
import { RunService } from './run.service';


@Injectable({
  providedIn: 'root'
})
export class RunsResolverService implements Resolve<RunningTime[]> {

  constructor(
    private dataStorageService: DataStorageService,
    private runService: RunService
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const times = this.runService.getRunningTimes();
    if (times.length === 0) {
      return this.dataStorageService.fetchRuntimes();
    } else {
      return times;
    }
  }
}
