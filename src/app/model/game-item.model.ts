const roundDecimal = decimalPlaces => value => Math.round(value * decimalPlaces)/decimalPlaces;

const roundThreeDecimalPlaces = value => roundDecimal(1000)(value);

export class GameItem {
  public vertical: boolean;
  public ratio: number;

  constructor(
    public id: number,
    public name: string,
    public width: number,
    public hight: number,
    public doubled? : boolean,
  ) {
    this.doubled = doubled || false;
    this.ratio = roundThreeDecimalPlaces(width / hight);
    this.vertical = this.ratio < 1 ? true : false;
  }
};
