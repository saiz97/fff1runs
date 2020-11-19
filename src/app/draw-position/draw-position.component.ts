import { Component, OnInit, OnDestroy } from '@angular/core';
import { Position } from './position.model';
import { PositionService } from './position.service';
import { empty } from 'rxjs';

@Component({
  selector: 'app-draw-position',
  templateUrl: './draw-position.component.html',
  styleUrls: ['./draw-position.component.scss']
})
export class DrawPositionComponent implements OnInit, OnDestroy {
  drawnPositions: Position[] = [];
  positions: Position[] = [];

  isDisabled: boolean = false;

  constructor(private positionService: PositionService) { }

  drawPosition() {
    let draw: Position = this.positions[Math.floor(Math.random()*this.positions.length)];

    while(this.drawnPositions.includes(draw)) {
      draw = this.positions[Math.floor(Math.random()*this.positions.length)];
    }

    this.drawnPositions.push(draw);

    if(this.drawnPositions.length === this.positions.length) {
      this.isDisabled = true;
    }
  }

  reset() {
    this.drawnPositions = [];
    this.isDisabled = false;
  }

  ngOnInit(): void {
    this.positions = this.positionService.getPositions();
  }

  ngOnDestroy(): void {
    this.drawnPositions = [];
    this.positions = [];
  }
}
