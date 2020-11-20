import { Component, OnInit, OnDestroy, Input, ViewChild, ElementRef } from '@angular/core';
import { RunService } from '../stopwatch/run.service';
import { RunningTime } from '../stopwatch/model/running-time.model';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  runtimes: RunningTime[] = [];
  shownItemBody: string = "";

  @ViewChild('itembody', {static: true}) itembody: ElementRef;

  constructor(private runService: RunService) { }

  ngOnInit(): void {
    this.runtimes = this.runService.getRunningTimes();

    if (this.runtimes != null)
      this.runtimes = this.runtimes.reverse();
  }

  reverse() {
    if (this.runtimes != null)
      this.runtimes = this.runtimes.reverse();
  }

  toggleBody() {
    console.log(this.itembody.nativeElement);
  }
}
