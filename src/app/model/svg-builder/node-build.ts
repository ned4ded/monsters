import { NodeBuilder } from './node-builder';
import { Node } from './node.model';
import { FigureModel } from './figure.model';

export default (el: Node | FigureModel) : Element => {
  const newFigure = el instanceof Node ? new FigureModel(el, []) : el;
  return new NodeBuilder(newFigure).build();
}
