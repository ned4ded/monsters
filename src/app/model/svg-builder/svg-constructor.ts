import { NodeBuilder } from './node-builder';
import { Node } from './node.model';
import { FigureModel } from './figure.model';

export class SvgConstructor {
  protected root: NodeBuilder;

  constructor({ meta, figure } : {meta: Node, figure: FigureModel}) {
    this.root = new NodeBuilder(meta, [], 'svg');

    this.root.children = [this.parse(figure)];
  }

  private parse(obj: FigureModel): NodeBuilder {
    return new NodeBuilder(
      obj.getMeta(),
      obj.getParts().map(obj => this.parse(obj)),
      'svg',
    );
  }

  public build(targetName?: string): void {
    const target = document.getElementById(targetName || 'nb-target');
    const svg = this.root.build();
    target.appendChild(svg);
  }
}
