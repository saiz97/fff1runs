import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.scss']
})
export class StopwatchComponent implements OnInit {
  _start: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }


  start(){
    this._start=true;
  }
  clear(){
    this._start=false;
  }

}
