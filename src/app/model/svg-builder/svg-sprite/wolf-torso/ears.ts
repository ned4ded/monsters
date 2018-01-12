import { make, group } from '../../svg-constructor.library';

const earLeft = make.polygon({ name: 'ear', mod: 'left'}, '46.7 0.05 23.78 56.72 69.63 56.72 46.7 0.05');

const earRight = make.polygon({ name: 'ear', mod: 'right'}, '91.45 0.05 68.53 56.72 114.38 56.72 91.45 0.05');

export default group('ears', earLeft, earRight);
