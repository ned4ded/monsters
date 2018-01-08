import { make, group } from '../../svg-constructor.library';

const eyeball = make.path('eyeball', 'M25.19,26.89A52.14,52.14,0,0,0,77.36,79.06,52.14,52.14,0,0,0,25.19,26.89Z');

const iris = make.circle('iris', 51.86, 53.61, 15.32);

const pupil = make.circle('pupil', 51.86, 53.61, 7.21);

export default group({name: 'eye', mod: 'left'}, eyeball, iris, pupil);
