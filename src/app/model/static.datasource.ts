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
    new GameItem(7, 'brown-rounds', 55.862, 63.793),
    new GameItem(8, 'cersents', 108.54, 31.939),
    new GameItem(9, 'gas', 149.963, 95.229),
    new GameItem(10, 'lolipop', 61.209, 177.135),
    new GameItem(11, 'pink-rounds', 153.808, 58.49),
    new GameItem(12, 'slime', 32.491, 121.166),
    new GameItem(13, 'spines', 112.4, 76.668),
    new GameItem(14, 'tress', 42.417, 189.579),
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
      height: '90%',
      width: 'auto',
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
      height: '95%',
      width: 'auto',
      figure: svgMonsters.draculaTorso
    }),
    makeMonster({
      name: 'spider',
      viewBox: [0, 0, 264.89, 327.08],
      initialScreenWidth: 150,
      anchor: 5,
      height: 'auto',
      width: '100%',
      figure: svgMonsters.spiderTorso
    }),
    makeMonster({
      name: 'ghost',
      viewBox: [0, 0, 245.74, 325.76],
      initialScreenWidth: 150,
      anchor: 3,
      height: '90%',
      width: '100%',
      figure: svgMonsters.ghostTorso
    }),
    makeMonster({
      name: 'bed',
      viewBox: [0, 0, 248.5, 315.64],
      initialScreenWidth: 150,
      anchor: 8,
      width: '90%',
      height: 'auto',
      figure: svgMonsters.bedTorso
    }),
    makeMonster({
      name: 'wolf',
      viewBox: [0, 0, 264.56, 322.51],
      initialScreenWidth: 150,
      anchor: 9,
      width: '90%',
      height: 'auto',
      figure: svgMonsters.wolfTorso
    }),
    makeMonster({
      name: 'yeti',
      viewBox: [0, 0, 264.56, 322.51],
      initialScreenWidth: 150,
      anchor: 10,
      width: '100%',
      height: '90%',
      figure: svgMonsters.yetiTorso
    }),
    makeMonster({
      name: 'zombie',
      viewBox: [0, 0, 233.58, 324.24],
      initialScreenWidth: 150,
      anchor: 12,
      width: 'auto',
      height: '95%',
      figure: svgMonsters.zombieTorso
    }),
    makeMonster({
      name: 'doctor',
      viewBox: [0, 0, 150.13, 337.94],
      initialScreenWidth: 150,
      anchor: 7,
      height: '96%',
      width: 'auto',
      figure: svgMonsters.doctorTorso
    }),
    makeMonster({
      name: 'yaga',
      viewBox: [0, 0, 233.58, 324.24],
      initialScreenWidth: 150,
      anchor: 2,
      height: '95%',
      width: 'auto',
      figure: svgMonsters.yagaTorso
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
