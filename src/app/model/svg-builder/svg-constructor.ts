import buildNode from './node-build';

export class SvgConstructor {
  protected root: Element;
  protected content: Element;

  constructor({ meta, figure }) {
    this.root = buildNode(meta);
    this.content = buildNode(figure);
  }

  public build(targetName?: string): void {
    const target = document.getElementById(targetName || 'nb-target');
    this.root.appendChild(this.content);
    target.appendChild(this.root);
  }
}
