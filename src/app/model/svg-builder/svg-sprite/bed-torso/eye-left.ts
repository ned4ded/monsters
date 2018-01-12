import { make, group } from '../../svg-constructor.library';

const eyeball = make.path('eyeball', 'M82.87,292.38a24.29,24.29,0,0,0,34.36,0A24.29,24.29,0,0,0,82.87,292.38Z');

const pupil = make.circle('pupil', 100.05, 292.38, 7.27);

export default group({ name: 'eye', mod: 'left'}, eyeball, pupil);
