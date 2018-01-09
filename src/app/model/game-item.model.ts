const roundDecimal = decimalPlaces => value => Math.round(value * decimalPlaces)/decimalPlaces;

const roundThreeDecimalPlaces = value => roundDecimal(1000)(value);

export class GameItem {
  public vertical: boolean;
  public ratio: number;

  constructor(
    public id: number,
    public name: string,
    public width: number,
    public height: number,
    public doubled? : boolean,
    public modificator?: string,
  ) {
    this.doubled = doubled || false;
    this.ratio = roundThreeDecimalPlaces(width / height);
    this.vertical = this.ratio < 1 ? true : false;
  }

  setMod(mod) {
    if(this.modificator) return false;

    return new GameItem(this.id, this.name, this.width, this.height, this.doubled, mod);
  }

  getUniqName() {
    return this.modificator? this.name + '--' + this.modificator : this.name;
  }
};
