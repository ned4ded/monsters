import { make, group } from '../../svg-constructor.library';

import head from './head';

const body = make.path('body', 'M260.9,280.8c0-64.94-53.13-118.07-118.07-118.07h0c-64.94,0-118.07,53.13-118.07,118.07V539.15H260.9Z');

export default group('zombie', body, head);
