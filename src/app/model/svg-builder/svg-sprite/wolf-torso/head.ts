import { make, group } from '../../svg-constructor.library';

import ears from './ears';
import mouth from './mouth';
import nose from './nose';
import eyes from './eyes';

const face = make.rect('face', 23.78, 56.1, 125.28, 74.65);

export default group('head', mouth, nose, face, ears, eyes);
