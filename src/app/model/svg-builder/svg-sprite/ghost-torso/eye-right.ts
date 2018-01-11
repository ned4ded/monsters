import { make, group } from '../../svg-constructor.library';

const eyeball = make.path('eyeball', 'M141.44,58.58a7,7,0,1,1-7,7,7,7,0,0,1,7-7m0-7.52a14.51,14.51,0,1,0,14.51,14.51,14.51,14.51,0,0,0-14.51-14.51Z');

const pupil = make.path('pupil', 'M141.44,76.32a10.75,10.75,0,1,1,10.75-10.75A10.76,10.76,0,0,1,141.44,76.32Z');

export default group({ name: 'eye', mod: 'right'}, pupil, eyeball);
