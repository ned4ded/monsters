import { make, group } from '../../svg-constructor.library';

const earLeft = make.ellipse({ name: 'ear', mod: 'left'}, 25.38, 169.88, 11.3, 26.99);

const earRight = make.ellipse({ name: 'ear', mod: 'right'}, 124.87, 169.88, 11.3, 26.99);

export default group('ears', earLeft, earRight);
