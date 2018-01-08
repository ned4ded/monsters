import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MonsterRepository } from '../../app/model/monster.repository';
import { GamePage } from '../game/game';
import { SvgBuilder } from '../../app/model/svg-builder/svg-builder.service';

@Component({
  selector: 'select-char-page',
  templateUrl: 'select-char.html'
})
export class SelectCharPage {

  constructor(
    public navCtrl: NavController,
    private repo: MonsterRepository) {

  }

  getMonsters(): SvgBuilder[] {
    return this.repo.getMonsters();
  }

  beginGame(monster) {
    this.navCtrl.push(GamePage, { monster: monster });
  }
}
