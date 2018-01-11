import { make, group } from '../../svg-constructor.library';

const eyeball = make.circle('eyeball', 154.55, 104.04, 17.91);

const pupil = make.circle('pupil', 154.55, 104.04, 9.83);

export default group({name: 'eye', mod: 'right'}, eyeball, pupil);
