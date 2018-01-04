import { Node } from './node.model';


export class NodeBuilder {
  node: Node;
  children: NodeBuilder[];
  tagNS: string;
  private tagNamespaces: Map<string, string> = new Map([
    ['svg', 'http://www.w3.org/2000/svg'],
    ['html', 'http://www.w3.org/1999/xhtml']
  ]);

  constructor(
    node: Node,
    children: NodeBuilder[],
    tagNS: string,
  ) {
    this.node = node;
    this.children = children;
    this.tagNS = this.tagNamespaces.get(tagNS);
  }

  build(): Element {
      const tag = document.createElementNS(this.tagNS, this.node.getType());

      const attr = this.node.getAttributes();

      Object.keys(attr)
            .filter(key => attr[key])
      			.forEach(key => tag.setAttribute(key, attr[key]));

      if(this.children.length === 0) {
      	return tag;
      }

     	const children = this.children.map(ch => {
        return ch.build();
      });

      children.forEach(ch => tag.appendChild(ch));

      return tag;
  }
}
