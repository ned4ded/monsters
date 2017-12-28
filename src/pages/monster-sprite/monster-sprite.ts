import { Component, OnInit } from '@angular/core';
import { Monster } from '../../app/model/monster.model';

@Component({
  selector: 'monster-sprite',
  templateUrl: 'monster-sprite.svg'
})

export class MonsterSprite implements OnInit {
  monsters: Monster[] = [];

  ngOnInit() {
    const el = document.getElementById('alien--short');
    console.log(el.dataset);
  }
}
