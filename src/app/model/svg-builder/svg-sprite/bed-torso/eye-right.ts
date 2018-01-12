import { make, group } from '../../svg-constructor.library';

const eyeball = make.path('eyeball', 'M124.49,292.38a24.29,24.29,0,0,0,34.36,0A24.29,24.29,0,0,0,124.49,292.38Z');

const pupil = make.circle('pupil', 141.67, 292.38, 7.27);

export default group({ name: 'eye', mod: 'left'}, eyeball, pupil);
