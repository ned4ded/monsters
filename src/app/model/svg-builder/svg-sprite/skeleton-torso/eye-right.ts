import { make, group } from '../../svg-constructor.library';

const eyeball = make.circle('eyeball', 129.44, 66.37, 25.31);
const pupil = make.circle('pupil', 136.88, 58.14, 10.09);

export default group({name: 'eye', mod: 'right'}, eyeball, pupil);
