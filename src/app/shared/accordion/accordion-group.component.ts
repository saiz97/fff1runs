import { ChangeDetectionStrategy, Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { RunningTime } from 'src/app/stopwatch/model/running-time.model';

@Component({
  selector: 'group',
  template: `
  <div class="runtime-item">
    <div class="item-head" (click)="toggle.emit()">
      <div><fa-icon class="btn-icon" [icon]="['fas', 'stopwatch']"></fa-icon></div>
      <div>{{ run.date  | date }}</div>
      <div>
        {{ run.laps[run.laps.length-1].minutes }}:{{ run.laps[run.laps.length-1].seconds }}:{{ run.laps[run.laps.length-1].milliseconds }}
      </div>
    </div>
    <div class="item-body" [ngClass]="{'hidden': !opened}">
      <p class="lap" *ngFor="let lap of run.laps">
        <fa-icon class="btn-icon" [icon]="['fas', 'flag']"></fa-icon>{{ lap.minutes }}:{{ lap.seconds }}:{{ lap.milliseconds }}
      </p>
    </div>
  <div>
  `,
  styleUrls: ['accordion.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccordionGroupComponent {

  @Input() opened = false;
  @Input() run: RunningTime;

  /**
   * Emitted when user clicks on group titlebar
   * @type {EventEmitter<any>}
   */
  @Output() toggle: EventEmitter<any> = new EventEmitter<any>();
}
