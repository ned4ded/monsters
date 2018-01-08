import { build } from './svg-constructor.library';
import { RootMetaModel } from './root-meta.model';
import { NodeModel } from './node.model';

export class SvgBuilder {
  protected root: RootMetaModel;
  protected content: NodeModel;

  constructor({ meta, figure } : { meta: RootMetaModel, figure: NodeModel}) {
    this.root = meta;
    this.content = figure;
  }

  public build(targetName?: string): void {
    const root = build(this.root);
    const content = build(this.content);

    const target = document.getElementById(targetName || 'nb-target');
    root.appendChild(content);
    target.appendChild(root);
  }

  public getName() {
    return this.root.getName();
  }
}
