import { make, group } from '../../svg-constructor.library';

const eyeLeft = group(
  {name:'eye', mod:'left'},
  make.circle('eyeball', 79.94, 81, 11.98),
  make.circle('pupil', 79.94, 81, 6.14),
);

const eyeRight = group(
  {name:'eye', mod:'right'},
  make.circle('eyeball', 112.78, 81, 15.2),
  make.circle('pupil', 112.78, 81, 7.79),
);

export default group('eyes', eyeLeft, eyeRight);
