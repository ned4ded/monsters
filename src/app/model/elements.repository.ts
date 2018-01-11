import { Injectable } from "@angular/core";

@Injectable()
export class ElementsRepository {
  public collection: {id: number, el: any, core: boolean}[] = [];
  private lastId: number = 1;

  constructor() {
  }

  addElement(element, core: boolean = false): number {
    this.lastId += 1;
    const wrapped = {id: this.lastId, el: element, core };
    const collection = [...this.collection.slice(), wrapped];
    this.collection = collection;
    return wrapped.id;
  }

  addElements(elements: any[], core?: boolean): {}[] {
    elements.forEach(el => {
      this.addElement(el, core);
      return;
    });

    return this.collection;
  }

  deleteElement(id : number) : boolean {
    const collection = this.collection.slice();
    const newCol = collection.filter(el => !(el.id === id));
    this.collection = newCol;
    return (collection.length === newCol.length) ? false : true;
  }

  getElements(fn) {
    return fn(this.collection.slice());
  }

  clear() {
    this.collection = [];
  }
}
