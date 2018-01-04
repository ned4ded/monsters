import { Node } from '../../node.model';
import makeFigure from '../../figure-builder';

const nostrillLeft = new Node({
  name: 'nostril',
  mod: 'left',
  customAttr: {
    cx: '76.75',
    cy: '99.18',
     r: '2.49',
   },
   tagType: 'circle'
});

const nostrillRight = new Node({
  name: 'nostril',
  mod: 'right',
  customAttr: {
    cx: '88.6',
    cy: '99.18',
     r: '2.49',
   },
   tagType: 'circle'
});

const nose = new Node({
  name: 'nose',
  tagType: 'g',
});

export default makeFigure(nose).addParts(nostrillLeft, nostrillRight);
