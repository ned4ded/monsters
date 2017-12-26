import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Monster } from '../../app/model/monster.model';

@Component({
  selector: 'game-page',
  templateUrl: 'game.html'
})
export class GamePage {
  monster: Monster;

  constructor(
    public navCtrl: NavController,
    public params: NavParams,
  ) {
    this.monster = params.get('monster');
  }

  endGame() {
    this.navCtrl.pop();
  }

}
