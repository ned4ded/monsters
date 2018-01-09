import { Component, AfterViewInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MonsterRepository } from '../../app/model/monster.repository';
import { GamePage } from '../game/game';
import { SvgBuilder } from '../../app/model/svg-builder/svg-builder.service';

import disposeMonsters from './select-char.browser';

@Component({
  selector: 'select-char-page',
  templateUrl: 'select-char.html'
})
export class SelectCharPage implements AfterViewInit {

  constructor(
    public navCtrl: NavController,
    private repo: MonsterRepository) {
  }

  ngAfterViewInit() {
    disposeMonsters(this.getMonsters());
  }

  getMonsters(): SvgBuilder[] {
    return this.repo.getMonsters();
  }

  beginGame(monster) {
    this.navCtrl.push(GamePage, { monster: monster });
  }
}
