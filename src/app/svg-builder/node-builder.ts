export class NodeBuilder {
  name: string;
  attr: object;
  children: NodeBuilder[];
  tagNamespace: string;

  constructor(
    name,
    attr,
    children,
    tagNamespace = 'http://www.w3.org/2000/svg'
  ) {
    this.name = name;
    this.attr = attr;
    this.children = children;
    this.tagNamespace = tagNamespace;
  }

  addChild(child: NodeBuilder) {
    this.children.push(child)
    return this;
  }

  addChildren(children: NodeBuilder[]) {
    children.forEach(ch => this.addChild(ch));
    return this;
  }

  build() {
      const tag = document.createElementNS(this.tagNamespace, this.name);

      Object.keys(this.attr)
      			.forEach(key => tag.setAttribute(key, this.attr[key]));

      if(this.children.length === 0) {
      	return tag;
      }

     	const children = this.children.map(n => {
        return n.build();
      });

      children.forEach(n => tag.appendChild(n));

      return tag;
  }

  buildRoot() : void {
   const root = document.getElementById('nb-target');
   const nodeTree = this.build();
   root.appendChild(nodeTree);
  }
}
