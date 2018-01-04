import { Node } from './node.model';

export class FigureModel {
  private meta: Node;
  private children : FigureModel[];

  constructor(meta: Node, children: FigureModel[]) {
    this.meta = meta;
    this.children = children;
  }

  addPart(node: Node | FigureModel) {
    const child =
      node instanceof Node?
      new FigureModel(node, []) :
      node;

    return new FigureModel(this.meta, [...this.children, child]);
  }

  addParts(...nodes: (Node | FigureModel)[]) {
    const children = nodes.map(node => {
      if(node instanceof Node) return new FigureModel(node, []);
      return node;
      }
    );

    return new FigureModel(this.meta, [...this.children, ...children]);
  }

  getParts() : FigureModel[] {
    return this.children;
  }

  getPart(fn) : FigureModel | boolean {
    const children = this.children.slice();

    if(children.length === 0) {
      return false;
    }

    const foundCh = children.find(fn);

    return foundCh ? foundCh : children.reduce((acc, n) => {
      if(acc) return acc;

      return n.getPart(fn);
    }, false);
  }

  getType() {
    return this.meta.getType();
  }

  getAttributes() {
    return this.meta.getAttributes();
  }

  getMeta() {
    return this.meta;
  }
}
