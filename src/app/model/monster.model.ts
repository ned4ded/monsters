export class Monster {

  constructor(
    public id: number,
    public name: string,
    public width: number,
    public height: number,
    public viewBox: [number, number, number, number],
    public bgColor?: [number, number, number],
  ) {}
};
