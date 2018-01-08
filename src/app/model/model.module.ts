import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
import { StaticDataSource } from "./static.datasource";
import { MonsterRepository } from "./monster.repository";
import { GameItemRepository } from "./game-item.repository";
import { ElementsRepository } from './elements.repository';

@NgModule({
  imports: [HttpModule],
  providers: [StaticDataSource, MonsterRepository, GameItemRepository, ElementsRepository]
})
export class ModelModule {};
