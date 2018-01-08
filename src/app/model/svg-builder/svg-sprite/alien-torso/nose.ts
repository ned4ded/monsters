import { make, group } from '../../svg-constructor.library';

const nostrillLeft = make.circle({ name: 'nostril', mod: 'left' }, 76.75, 99.18, 2.49);

const nostrillRight = make.circle({ name: 'nostril', mod: 'right' }, 88.6, 99.18, 2.49);

export default group('nose', nostrillLeft, nostrillRight);
