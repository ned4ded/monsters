import { make, group } from '../../svg-constructor.library';

const snout = make.polygon('snout', '219.34 119.39 23.78 119.39 23.78 61.81 219.34 96.35 219.34 119.39');

const noseFigure = make.circle('nose-figure', 218.98, 95.93, 8.93);

export default group('nose', snout, noseFigure);
