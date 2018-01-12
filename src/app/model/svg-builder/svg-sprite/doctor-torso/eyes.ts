import { make, group } from '../../svg-constructor.library';

const eyeLeft = make.circle({name:'eye', mod:'left'}, 55.81, 143.35, 6.53);
const eyeRight = make.circle({name:'eye', mod:'right'}, 92.44, 137.48, 12.06);

export default group('eyes', eyeLeft, eyeRight);
