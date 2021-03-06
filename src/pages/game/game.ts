import { Component, OnInit } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import { GameItem } from '../../app/model/game-item.model';
import { GameItemRepository } from '../../app/model/game-item.repository';
import { SvgBuilder } from '../../app/model/svg-builder/svg-builder.service';
import { ElementsRepository } from '../../app/model/elements.repository';

import { beginGame, endGame, resetGame } from './game.browser';

@Component({
  selector: 'game-page',
  templateUrl: 'game.html'
})
export class GamePage implements OnInit {
  monster: SvgBuilder;
  items: GameItem[];
  canLeave: boolean = false;

  constructor(
    public navCtrl: NavController,
    public params: NavParams,
    private gameItemRepo: GameItemRepository,
    private elemRepo: ElementsRepository,
  ) {
    this.monster = params.get('monster');
    this.items = gameItemRepo.getItems().reduce((acc, e) => {
      const newEl = e.doubled? [e, e.setMod('dublicate')] : [e];

      return [...acc, ...newEl];
    }, []);

    this.elemRepo.addElements(this.items, true);
  }

  ionViewCanLeave() {
    return this.canLeave;
  };

  ngOnInit() {
    this.buildMonster();
  }

  ngAfterViewInit() {
    this.startGame();
  }

  endGame() {
    this.canLeave = true;
    endGame();
    this.elemRepo.clear();
    this.navCtrl.pop();
  }

  getItems() {
    const items = this.elemRepo.getElements(col => col.filter(e => e.el instanceof GameItem && e.core === true));
    return items;
  }

  getElements() {
    const items = this.elemRepo.getElements(col => col.filter(e => e.el instanceof GameItem));
    return items;
  }

  buildMonster() {
    this.monster.build();
  }

  startGame() {
    beginGame(this.elemRepo);
  }

  reset() {
    this.elemRepo.clear();
    this.elemRepo.addElements(this.items, true);
    resetGame();
  }
}
