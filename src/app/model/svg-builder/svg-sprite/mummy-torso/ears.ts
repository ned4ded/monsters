import { make, group } from '../../svg-constructor.library';

const earLeft = make.circle({name: 'ear', mod: 'ear-left'}, 61.37, 110.92, 22.96);

const earRight = make.circle({name: 'ear', mod: 'ear-right'}, 203.59, 110.92, 22.96);

export default group('ears', earLeft, earRight);
