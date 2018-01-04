import { Injectable } from "@angular/core";
import { StaticDataSource } from "./static.datasource";
import { Monster } from "./monster.model";
import { SvgConstructor } from './svg-builder/svg-constructor';

@Injectable()
export class MonsterRepository {
  private monsters: Monster[] = [];
  private newMonsters: SvgConstructor[] = [];

  constructor(private src: StaticDataSource) {
    src.getMonsters().subscribe(data => {
      this.monsters = data;
    });

    src.getNewMonsters().subscribe(data => {
      this.newMonsters = data;
    });
  }

  getMonsters() : Monster[] {
    return this.monsters;
  }

  getNewMonsters() : SvgConstructor[] {
    return this.newMonsters;
  }

  getMonster(id : number) : Monster {
    return this.monsters.find(m => m.id == id);
  }

  getViewBox(monsterId : number) : [number, number, number, number] {
    return this.getMonster(monsterId).viewBox;
  }
}
