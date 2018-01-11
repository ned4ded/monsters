import { make, group } from '../../svg-constructor.library';

const eyeball = make.path('eyeball', 'M104.3,58.58a7,7,0,1,1-7,7,7,7,0,0,1,7-7m0-7.52a14.51,14.51,0,1,0,14.51,14.51A14.51,14.51,0,0,0,104.3,51.06Z');

const pupil = make.path('pupil', 'M104.3,76.32A10.75,10.75,0,1,1,115,65.57,10.76,10.76,0,0,1,104.3,76.32Z');

export default group({ name: 'eye', mod: 'left'}, pupil, eyeball);
