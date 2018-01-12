import { make, group } from '../../svg-constructor.library';

const eyeballLeft = make.ellipse('eyeball', 66.08, 97.54, 27.81, 16.86);
const pupilLeft = make.circle('pupil', 74.18, 97.32, 8.32);

const eyeLeft = group({name: 'eye', mod: 'left'}, eyeballLeft, pupilLeft);

const eyeballRight = make.ellipse('eyeball', 135.7, 97.54, 27.81, 16.86);
const pupilRight = make.circle('pupil', 142.93, 97.32, 8.32);

const eyeRight = group({name: 'eye', mod: 'right'}, eyeballRight, pupilRight);

export default group('eyes', eyeLeft, eyeRight);
