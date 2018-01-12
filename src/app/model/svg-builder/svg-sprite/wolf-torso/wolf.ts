import { make, group } from '../../svg-constructor.library';

import head from './head';

const body = make.rect('body', -21, 192.5, 194.13, 465.27);

export default group('wolf', body, head);
