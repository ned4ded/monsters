// Entities
import { Node } from '../../node.model';
import makeFigure from '../../figure-builder';


const eyeball = new Node({
  name: 'eyeball',
  mod: 'left',
  customAttr: {
    d: 'M25.19,26.89A52.14,52.14,0,0,0,77.36,79.06,52.14,52.14,0,0,0,25.19,26.89Z'
  },
  tagType: 'path',
});

const iris = new Node({
  name: 'iris',
  mod: 'left',
  customAttr: {
    fill: '#586ab1',
    cx: '51.86',
    cy: '53.61',
    r: '15.32'
  },
  tagType: 'circle',
})

const pupil = new Node({
  name: 'pupil',
  mod: 'left',
  customAttr: {
    cx: '51.86',
    cy: '53.61',
    r: '7.21',
  },
  tagType: 'circle',
});

const eye = new Node({
    name: 'eye',
    mod: 'left',
    tagType: 'g',
});

export default makeFigure(eye).addParts(eyeball, iris, pupil);
