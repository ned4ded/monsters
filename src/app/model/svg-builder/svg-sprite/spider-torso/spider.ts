import { make, group } from '../../svg-constructor.library';

import head from './head';
import legs from './legs';

const bodyPartOne = make.ellipse({name: 'body-part', mod: 'colored'}, 132.45, 259.43, 74.06, 47.7);

const bodyPartTwo = make.ellipse('body-part', 132.45, 209.44, 74.06, 47.7);

const bodyPartThree = make.ellipse({name: 'body-part', mod: 'colored'}, 132.45, 163.61, 74.06, 47.7);

const bodyPartFour = make.ellipse('body-part', 132.45, 115.29, 74.06, 47.7);

const sting = make.polygon({name: 'sting', class:'decor__sting'}, '130.6 327.09 127.36 307.43 133.85 307.43 130.6 327.09');

const toothOne = make.polygon('tooth', '112.44 244.6 109.19 224.94 115.68 224.94 112.44 244.6');

const toothTwo = make.polygon('tooth', '126.44 244.6 123.2 224.94 129.69 224.94 126.44 244.6');

const toothThree = make.polygon('tooth', '139.93 244.6 136.69 224.94 143.18 224.94 139.93 244.6');

const toothFour = make.polygon('tooth', '153.94 244.6 150.69 224.94 157.18 224.94 153.94 244.6');

const mouth = group({name: 'mouth', class: 'decor__mouth'}, toothOne, toothTwo, toothThree, toothFour);

const decor = group('decor', mouth, sting);

const bodyFigure = group('body-figure', bodyPartOne, bodyPartTwo, bodyPartThree, bodyPartFour, decor);

const body = group('body', legs, bodyFigure);

const web = make.line({name: 'web', class: 'decor__web'}, 131.28, 131.28, 131.28, 73.95);

export default group('spider', web, body, head);
