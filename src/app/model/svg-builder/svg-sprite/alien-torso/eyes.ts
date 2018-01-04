import { Node } from '../../node.model';
import { FigureModel } from '../../figure.model';
import makeFigure from '../../figure-builder';

import eyeLeft from './eye-left';
import eyeRight from './eye-right';

const eyes = new Node({
  name: 'eyes',
  tagType: 'g',
});

export default makeFigure(eyes).addParts(eyeLeft, eyeRight);
