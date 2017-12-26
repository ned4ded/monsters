import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Monster } from "../../app/model/monster.model";
import { MonsterRepository } from '../../app/model/monster.repository';
import { GamePage } from '../game/game';

@Component({
  selector: 'select-char-page',
  templateUrl: 'select-char.html'
})
export class SelectCharPage {

  constructor(
    public navCtrl: NavController,
    private repo: MonsterRepository) {

  }

  getMonsters(): Monster[] {
    return this.repo.getMonsters();
  }

  beginGame(monster) {
    this.navCtrl.push(GamePage, { monster: monster });
  }
}
