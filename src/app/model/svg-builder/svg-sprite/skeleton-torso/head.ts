import { make, group } from '../../svg-constructor.library';

import eyes from './eyes';
import nose from './nose';
import jaws from './jaws';

const contentFigure = group('content', jaws, eyes, nose);

const head = make.ellipse({ name: 'head', mod: 'figure' }, 99.95, 67.37, 89.2, 67.38);

export default group('head', head, contentFigure);
