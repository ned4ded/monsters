import { Injectable } from "@angular/core";
import { StaticDataSource } from "./static.datasource";
import { SvgBuilder } from './svg-builder/svg-builder.service';

@Injectable()
export class MonsterRepository {
  private monsters: SvgBuilder[] = [];

  constructor(private src: StaticDataSource) {

    src.getMonsters().subscribe(data => {
      this.monsters = data;
    });
  }

  getMonsters() : SvgBuilder[] {
    return this.monsters;
  }
}
