import { make, group } from '../../svg-constructor.library';

import defs from './defs';
import eyes from './eyes';
import mouth from './mouth';

const body = make.path('body', 'M122.87,0C50.59,0-8,222.7-8,497.41q0,5.15,0,10.26c.32,0,.62.07.95.07,21.75,0,21.75-48.95,43.49-48.95S58.22,507.74,80,507.74s21.75-48.95,43.5-48.95,21.75,48.95,43.51,48.95,21.75-48.95,43.51-48.95,21.76,48.49,43.22,48.93q0-5.14,0-10.31C253.74,222.7,195.14,0,122.87,0Z');

export default group('ghost', defs, body, eyes, mouth);
