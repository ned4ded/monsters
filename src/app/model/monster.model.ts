export class Monster {

  constructor(
    public id: number,
    public name: string,
    public width: number,
    public height: number,
    public bgColor?: [number, number, number],
  ) {}
};
