import { MetaModel } from './meta.model';
import { RootMetaModel } from './root-meta.model';

export class NodeModel {
  private meta: MetaModel | RootMetaModel;
  private children : NodeModel[];

  constructor(meta: MetaModel | RootMetaModel, children: NodeModel[]) {
    this.meta = meta;
    this.children = children;
  }

  addPart(node: MetaModel | NodeModel) {
    const child =
      node instanceof MetaModel?
      new NodeModel(node, []) :
      node;

    return new NodeModel(this.meta, [...this.children, child]);
  }

  addParts(...nodes: (MetaModel | NodeModel)[]) {
    const children = nodes.map(node => {
      if(node instanceof MetaModel) return new NodeModel(node, []);
      return node;
      }
    );

    return new NodeModel(this.meta, [...this.children, ...children]);
  }

  getParts() : NodeModel[] {
    return this.children;
  }

  getPart(fn) : NodeModel | boolean {
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
