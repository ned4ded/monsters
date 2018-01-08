import { Injectable } from "@angular/core";
import { StaticDataSource } from "./static.datasource";
import { GameItem } from "./game-item.model";

@Injectable()
export class GameItemRepository {
  private items: GameItem[] = [];

  constructor(private src: StaticDataSource) {
    src.getItems().subscribe(data => {
      this.items = data;
    });
  }

  getItems() : GameItem[] {
    console.log('get items repo');
    return this.items;
  }

  getItem(id : number) : GameItem {
    return this.items.find(m => m.id == id);
  }
}
