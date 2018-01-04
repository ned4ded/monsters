import { Component, OnInit } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import { Monster } from '../../app/model/monster.model';
import { MonsterRepository } from '../../app/model/monster.repository';
import { GameItem } from '../../app/model/game-item.model';
import { GameItemRepository } from '../../app/model/game-item.repository';
import { MonsterConstructor } from '../../app/model/svg-builder/monster-constructor';

@Component({
  selector: 'game-page',
  templateUrl: 'game.html'
})
export class GamePage implements OnInit {
  monster: MonsterConstructor;
  items: GameItem[];

  constructor(
    public navCtrl: NavController,
    public params: NavParams,
    private gameItemRepo: GameItemRepository,
    private monsterRepo: MonsterRepository,
  ) {
    this.monster = params.get('monster');
    this.items = gameItemRepo.getItems();
  }

  ngOnInit() {
    this.buildMonster();
  }

  endGame() {
    this.navCtrl.pop();
  }

  getItems() {
    return this.items;
  }

  buildMonster() {
    this.monster.build();
  }

  getCorrelationalSize(item: GameItem, side: string, value: number) :number {
    switch(side) {
      case('width'):
        return value * item.ratio;
      case('height'):
        return value / item.ratio;
      default:
        break;
    }
  }

  // getMonsterViewBox() : string {
  //   const viewBox = this.monsterRepo.getViewBox(this.monster.id);
  //   return viewBox.slice().join(' ');
  // }
}
