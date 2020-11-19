export class Position {
  public shortName: string;
  public name: string;
  public isDrawn: boolean;

  constructor(shortName: string, name: string, isDrawn: boolean) {
    this.shortName = shortName;
    this.name = name;
    this.isDrawn = isDrawn;
  }
}
