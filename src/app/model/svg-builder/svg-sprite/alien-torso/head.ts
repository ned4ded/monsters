import { make, group } from '../../svg-constructor.library';

import content from './content';

const head = make.path({ name: 'head', mod: 'figure'}, 'M82.67,153.65a39.12,39.12,0,0,1-33.88-19.56L5.25,58.69A39.13,39.13,0,0,1,39.13,0H126.2a39.13,39.13,0,0,1,33.88,58.69l-43.53,75.4A39.13,39.13,0,0,1,82.67,153.65Z');

export default group('head', head, content);
