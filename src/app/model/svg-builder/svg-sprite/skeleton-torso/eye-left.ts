import { make, group } from '../../svg-constructor.library';

const eyeball = make.circle('eyeball', 70.45, 66.37, 25.31);
const pupil = make.circle('pupil', 72.84, 76.61, 10.09);

export default group({name: 'eye', mod: 'left'}, eyeball, pupil);
