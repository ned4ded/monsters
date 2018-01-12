import { make, group } from '../../svg-constructor.library';

import head from './head';

const body = make.path('body', 'M150.15,332a75.32,75.32,0,0,0-75.1-75.1h0A75.32,75.32,0,0,0,0,332V761.33h150.2Z');

export default group('doctor', body, head);
