import { Node } from '../../node.model';
import makeFigure from '../../figure-builder';

const eyeball = new Node({
  name: 'eyeball',
  mod: 'right',
  customAttr: {
    d: 'M140.14,26.89A52.14,52.14,0,0,0,88,79.06,52.14,52.14,0,0,0,140.14,26.89Z'
  },
  tagType: 'path',
});

const iris = new Node({
  name: 'iris',
  mod: 'right',
  customAttr: {
    fill: '#586ab1',
    cx: '113.53',
    cy: '53.61',
    r: '15.32'
  },
  tagType: 'circle',
})

const pupil = new Node({
  name: 'pupil',
  customAttr: {
    cx: '113.53',
    cy: '53.61',
    r: '4.75',
  },
  tagType: 'circle',
})

const eye = new Node({
  name: 'eye',
  mod: 'right',
  tagType: 'g',
});

export default makeFigure(eye).addParts(eyeball, iris, pupil);
