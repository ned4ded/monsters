import { make, group } from '../../svg-constructor.library';

import ears from './ears';
import mouth from './mouth';
import nose from './nose';
import eyes from './eyes';

const hairPartBack = make.path({name: 'hair-part', mod: 'back'}, 'M79.78,3.64A30.21,30.21,0,0,1,69.23,51a30.2,30.2,0,1,0,34.49,48.06A49.66,49.66,0,1,0,79.78,3.64Z');

const hairPartForward = make.path({name: 'hair-part', mod: 'forward'}, 'M115,29.3a44.77,44.77,0,0,1-44.8,44.8l9-19.38,19-19.81Z');

const face = make.ellipse('face', 103.28, 141.3, 32.84, 101.27);

const head = group('head-figure', hairPartBack, face, hairPartForward);

export default group('head', head, ears, nose, eyes, mouth);
