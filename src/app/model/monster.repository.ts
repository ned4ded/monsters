import { Injectable } from "@angular/core";
import { StaticDataSource } from "./static.datasource";
import { Monster } from "./monster.model";

@Injectable()
export class MonsterRepository {
  private monsters: Monster[] = [];

  constructor(private src: StaticDataSource) {
    src.getMonsters().subscribe(data => {
      this.monsters = data;
    });
  }

  getMonsters() : Monster[] {
    return this.monsters;
  }

  getMonster(id : number) : Monster {
    return this.monsters.find(m => m.id == id);
  }
}
