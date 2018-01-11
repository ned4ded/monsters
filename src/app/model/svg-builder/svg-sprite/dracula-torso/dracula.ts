import { make, group } from '../../svg-constructor.library';

import head from './head';

const bodyPartTop = make.polygon({name: 'body-part', mod: 'top'}, '145.49 266.49 61.06 266.49 -0.03 166.71 206.59 166.71 145.49 266.49');

const bodyPartBottom = make.polygon({name: 'body-part', mod: 'bottom'}, '145 266.49 61.06 266.49 -34.33 620.09 240.88 620.09 145.49 266');

const body = group('body', bodyPartTop, bodyPartBottom);

export default group('dracula', body, head);
