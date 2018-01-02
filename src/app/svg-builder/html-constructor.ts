import { NodeBuilder } from './node-builder';

export class HtmlConstructor {
  private root: NodeBuilder = new NodeBuilder('root', {}, []);

  constructor() {}

  addChild(child: NodeBuilder) {
    this.root.children.push(child)
    return this.root;
  }

  addChildren(children: NodeBuilder[]) {
    children.forEach(ch => this.addChild(ch));
    return this;
  }
}
