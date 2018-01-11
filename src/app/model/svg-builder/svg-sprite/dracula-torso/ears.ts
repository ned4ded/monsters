import { make, group } from '../../svg-constructor.library';

const earLeft = make.ellipse({ name: 'ear', mod: 'left'}, 71.4, 115.56, 13.66, 18.22);

const earRight = make.ellipse({ name: 'ear', mod: 'right'}, 135.15, 115.56, 13.66, 18.22);

export default group('ears', earLeft, earRight);
