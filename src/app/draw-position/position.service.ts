import { Injectable } from '@angular/core';
import { Position } from './position.model';

@Injectable({
  providedIn: 'root'
})
export class PositionService {
  private positions: Position[] = [];

  constructor() {
    this.positions.push(
      new Position("GK", "Gruppenkommandant", false),
      new Position("ME", "Melder", false),
      new Position("MA", "Maschinist", false),
      new Position("1", "Angriffstruppführer", false),
      new Position("2", "Angriffstruppmann", false),
      new Position("3", "Wassertruppführer", false),
      new Position("4", "Wassertruppmann", false),
      new Position("5", "Schlauchtruppführer", false),
      new Position("6", "Schlauchtruppmann", false),
    )
  }

  getPositions() {
    return this.positions;
  }
}
