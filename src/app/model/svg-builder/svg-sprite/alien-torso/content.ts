import { Node } from '../../node.model';
import makeFigure from '../../figure-builder';

import mouth from './mouth';
import eyes from './eyes';
import nose from './nose';

const content = new Node({
  name: 'content',
  customAttr: { },
  tagType: 'g',
});

export default makeFigure(content).addParts(mouth, eyes, nose);
