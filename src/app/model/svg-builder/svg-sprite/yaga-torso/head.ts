import { make, group } from '../../svg-constructor.library';

import mouth from './mouth';
import nose from './nose';
import eyes from './eyes';

const shawl = group(
  {name:'shawl', mod:'decor__shawl'},
  make.path('shawl-part', 'M96.38.07a196.7,196.7,0,0,1,0,278.33A196.7,196.7,0,0,1,96.38.07Z'),
  make.path('shawl-part', 'M26.33,330.41A73.62,73.62,0,0,1,100,256.75,73.62,73.62,0,0,1,26.33,330.41Z'),
  make.path('shawl-part', 'M92.76,256.75a73.62,73.62,0,0,1,73.66,73.66A73.62,73.62,0,0,1,92.76,256.75Z'),
  make.circle('shawl-part', 96.38, 269.15, 26.63)
);

const headFigure = group(
  'head-figure',
  shawl,
  make.rect('face', 72.11, 38.2, 48.53, 202.49, 24.27, 24.27),
);

export default group('head', headFigure, eyes, nose, mouth);
