import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Monster } from '../../app/model/monster.model';
import { MonsterRepository } from '../../app/model/monster.repository';
import { GameItem } from '../../app/model/game-item.model';
import { GameItemRepository } from '../../app/model/game-item.repository';

@Component({
  selector: 'game-page',
  templateUrl: 'game.html'
})
export class GamePage {
  monster: Monster;
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

  endGame() {
    this.navCtrl.pop();
  }

  getItems() {
    return this.items;
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

  getMonsterViewBox() : string {
    const viewBox = this.monsterRepo.getViewBox(this.monster.id);
    return viewBox.slice().join(' ');
  }
}
