import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SelectCharPage } from '../select-char/select-char';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  selectGame() {
    this.navCtrl.push(SelectCharPage);
  }

}
