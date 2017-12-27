import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/from";

// Entities
import { Monster } from "./monster.model";
import { GameItem } from "./game-item.model";

@Injectable()
export class StaticDataSource {

  private monsters: Monster[] = [
    new Monster(1, 'mummy', 176.358, 200.968, [63, 39, 33]),
    new Monster(2, 'vampire', 92.279, 220.673, [59, 69, 126] ),
    new Monster(3, 'spider', 129.091, 104.901, [241, 234, 53]),
    new Monster(4, 'ghost', 103.461, 200.7, [0, 0, 0]),
    new Monster(5, 'skeleton', 173.034, 222.792, [0, 0, 0]),
    new Monster(6, 'alien', 56.551, 218.464, [0, 0, 0]),
  ];

  private gameItems: GameItem[] = [
    new GameItem(1, 'dress', 148.652, 111.365),
    new GameItem(2, 'earring', 53.809, 124.738, true),
    new GameItem(3, 'egg', 133.147, 134.332),
    new GameItem(4, 'eyes', 178.063, 42.556),
    new GameItem(5, 'lips', 98.471, 69.73),
    new GameItem(6, 'love-glasses', 296.347, 103.926),
  ];

  getMonsters(): Observable<Monster[]> {
    return Observable.from([this.monsters]);
  }

  getItems(): Observable<GameItem[]> {
    return Observable.from([this.gameItems]);
  }
};
