import { make, group } from '../../svg-constructor.library';

const eyeball = make.path('eyeball', 'M140.14,26.89A52.14,52.14,0,0,0,88,79.06,52.14,52.14,0,0,0,140.14,26.89Z');

const iris = make.circle('iris', 113.53, 53.61, 15.32);

const pupil = make.circle('pupil', 113.53, 53.61, 4.75);

export default group({ name: 'eye', mod: 'right', }, eyeball, iris, pupil);
