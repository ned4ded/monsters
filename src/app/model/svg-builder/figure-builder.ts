import { FigureModel } from './figure.model';
import { Node } from './node.model';

const make = (node: Node) => {
  return new FigureModel(node, []);
}

export default make;
