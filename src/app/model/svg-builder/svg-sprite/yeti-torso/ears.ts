import { make, group } from '../../svg-constructor.library';

const earLeft = make.ellipse({ name: 'ear', mod: 'left'}, 68.67, 98.73, 16.3, 12.55);

const earRight = make.ellipse({ name: 'ear', mod: 'right'}, 197.58, 98.73, 16.3, 12.55);

export default group('ears', earLeft, earRight);
