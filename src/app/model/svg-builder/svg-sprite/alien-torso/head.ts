import { Node } from '../../node.model';
import { FigureModel } from '../../figure.model';
import makeFigure from '../../figure-builder';

import content from './content';

const headFigure = new Node({
  name: 'head',
  mod: 'figure',
  customAttr: {
    fill: '#6fc055',
    d: 'M82.67,153.65a39.12,39.12,0,0,1-33.88-19.56L5.25,58.69A39.13,39.13,0,0,1,39.13,0H126.2a39.13,39.13,0,0,1,33.88,58.69l-43.53,75.4A39.13,39.13,0,0,1,82.67,153.65Z',
   },
   tagType: 'path',
});

const head = new Node({
  name: 'head',
  tagType: 'g',
});

export default makeFigure(head).addParts(headFigure, content);
