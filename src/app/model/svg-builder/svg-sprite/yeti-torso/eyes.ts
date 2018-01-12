import { make, group } from '../../svg-constructor.library';

const eyeLeft = make.circle({name: 'eye', mod:'left'}, 114.32, 79.49, 5.77);

const eyeRight = make.circle({name: 'eye', mod:'right'}, 153.13, 79.49, 5.77);

export default group('eyes', eyeLeft, eyeRight);
