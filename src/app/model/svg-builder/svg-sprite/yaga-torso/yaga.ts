import { make, group } from '../../svg-constructor.library';

import head from './head';

const ornament = group(
  {name: 'ornament', class: 'decor__ornament'},
  make.circle('ornament-part', 31.56, 265.47, 4.89),
  make.circle('ornament-part', 54.23, 252.58, 4.89),
  make.circle('ornament-part', 17.78, 291.7, 4.89),
  make.circle('ornament-part', 94.23, 313.03, 4.89),
);

const body = group(
  'body',
  make.path('body-figure', 'M0,526.25V299.52a69.37,69.37,0,0,1,69.17-69.17h44.62V525.5Z'),
  ornament
);

export default group('yaga', body, head);
