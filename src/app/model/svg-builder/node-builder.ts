import { NodeModel } from './node.model';

export class NodeBuilder {
  private attr: {};
  private type: string;
  children: NodeModel[];
  tagNS: string;

  private tagNamespaces: Map<string, string> = new Map([
    ['svg', 'http://www.w3.org/2000/svg'],
    ['html', 'http://www.w3.org/1999/xhtml']
  ]);

  constructor(node: NodeModel, tagNS?)
  {
    this.attr = node.getAttributes();
    this.type = node.getType();
    this.children = node.getParts();
    this.tagNS = this.tagNamespaces.get(tagNS || 'svg');
  }

  build(): Element {
      const tag = document.createElementNS(this.tagNS, this.type);

      const attr = this.attr;

      Object.keys(attr)
            .filter(key => attr[key])
      			.forEach(key => tag.setAttribute(key, attr[key]));

      if(this.children.length === 0) {
      	return tag;
      }

     	const children = this.children.map(ch => {
        return new NodeBuilder(ch).build();
      });

      children.forEach(ch => tag.appendChild(ch));

      return tag;
  }
}
