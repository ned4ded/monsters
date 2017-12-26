import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
import { StaticDataSource } from "./static.datasource";
import { MonsterRepository } from "./monster.repository";

@NgModule({
  imports: [HttpModule],
  providers: [StaticDataSource, MonsterRepository]
})
export class ModelModule {};
