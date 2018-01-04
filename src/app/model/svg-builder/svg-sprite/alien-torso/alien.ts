// Entities
import { Node } from '../../node.model';
import { FigureModel } from '../../figure.model';
import makeFigure from '../../figure-builder';

// Model Parts
import head from './head';

const bodyFigure = new Node({
  name: 'body',
  mod: 'figure',
  customAttr: {
    fill: '#6fc055',
    cx: '82.66',
    cy: '285.78',
    rx: '50.36',
    ry: '139.24',
  },
  tagType: 'ellipse',
});

const body = new Node({
  name: 'body',
  tagType: 'g',
})

export default makeFigure(body).addParts(head, bodyFigure);
