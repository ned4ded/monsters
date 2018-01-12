import { make, group } from '../../svg-constructor.library';

import mouth from './mouth';
import nose from './nose';
import eyes from './eyes';
import ears from './ears';

const hatFigure = make.rect('hat-figure', 40.23, 0, 70.38, 90.75);
const crossVertical = make.rect({name:'cross', mod:'vertical'}, 69.55, 22.99, 11.74, 51.37);
const crossHorizontal = make.rect({name:'cross', mod:'horizontal'}, 50, 42.8, 51.37, 11.74);

const hat = group({name: 'hat', class: 'decor__hat'}, hatFigure, crossVertical, crossHorizontal);

const headFigure = make.ellipse('head-figure', 75.42, 173.19, 49.17, 117.42);

export default group('head', headFigure, hat, ears, eyes, nose, mouth);
