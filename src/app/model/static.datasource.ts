import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/from";

// Entities
import { GameItem } from "./game-item.model";
import { SvgBuilder } from './svg-builder/svg-builder.service';
import makeMonster from './svg-builder/monster-constructor';

// DataShorties
import * as svgMonsters from './svg-builder/svg-sprite/monsters.datasource';

@Injectable()
export class StaticDataSource {

  private gameItems: GameItem[] = [
    new GameItem(1, 'dress', 148.652, 111.365),
    new GameItem(2, 'earring', 53.809, 124.738, true),
    new GameItem(3, 'egg', 133.147, 134.332),
    new GameItem(4, 'eyes', 178.063, 42.556),
    new GameItem(5, 'lips', 98.471, 69.73),
    new GameItem(6, 'love-glasses', 296.347, 103.926),
  ];

  private monsters: SvgBuilder[] = [
    makeMonster({
      name: 'alien',
      viewBox: [0, 0, 165.37, 302.36],
      initialScreenWidth: 150,
      anchor: 1,
      figure: svgMonsters.alienTorso
    }),
    makeMonster({
      name: 'skeleton',
      viewBox: [0, 0, 200.62, 322.01],
      initialScreenWidth: 150,
      anchor: 6,
      figure: svgMonsters.skeletonTorso
    }),
    makeMonster({
      name: 'mummy',
      viewBox: [0, 0, 266.33, 334.62],
      initialScreenWidth: 150,
      anchor: 4,
      width: '100%',
      height: '100%',
      figure: svgMonsters.mummyTorso
    }),
    makeMonster({
      name: 'dracula',
      viewBox: [0, 0, 206.58, 334.71],
      initialScreenWidth: 150,
      anchor: 11,
      figure: svgMonsters.draculaTorso
    }),
    makeMonster({
      name: 'spider',
      viewBox: [0, 0, 264.89, 327.08],
      initialScreenWidth: 150,
      anchor: 5,
      figure: svgMonsters.spiderTorso
    }),
    makeMonster({
      name: 'ghost',
      viewBox: [0, 0, 245.74, 325.76],
      initialScreenWidth: 150,
      anchor: 3,
      figure: svgMonsters.ghostTorso
    }),
  ]

  getMonsters(): Observable<SvgBuilder[]> {
    return Observable.from([this.monsters]);
  }

  getItems(): Observable<GameItem[]> {
    console.log('game items static datasourc');
    return Observable.from([this.gameItems]);
  }
};
