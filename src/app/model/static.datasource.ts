import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/from";

// Entities
import { Monster } from "./monster.model";

@Injectable()
export class StaticDataSource {

  private monsters: Monster[] = [
    new Monster(1, 'mummy'),
    new Monster(2, 'vampire'),
    new Monster(3, 'spider'),
    new Monster(4, 'ghost'),
    new Monster(5, 'skeleton'),
    new Monster(6, 'alien'),
  ];

  getMonsters(): Observable<Monster[]> {
    return Observable.from([this.monsters]);
  }
};
