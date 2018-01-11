import { make, group } from '../../svg-constructor.library';

const eyeball = make.circle('eyeball', 161.09, 82.46, 8.94);

const pupil = make.circle('pupil', 161.09, 82.46, 4.41);

export default group({ name: 'eye', mod: 'right'}, eyeball, pupil);
