import { Component, OnInit, OnDestroy } from '@angular/core';
import { RunService } from '../stopwatch/run.service';
import { RunningTime } from '../stopwatch/model/running-time.model';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  runtimes: RunningTime[] = [];

  constructor(private runService: RunService) { }

  ngOnInit(): void {
    this.runtimes = this.runService.getRunningTimes();
    console.table(this.runtimes);
  }
}
