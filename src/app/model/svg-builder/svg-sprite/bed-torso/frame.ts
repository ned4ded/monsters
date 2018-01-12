import { make, group } from '../../svg-constructor.library';

const knob = make.circle('knob', 18.28, 18.26, 18.26);

const verticalBeam = make.rect({name: 'beam', mod: 'vertical'}, 5.13, 35.06, 27.39, 280.58);

const horizontalBeam = make.rect({name: 'beam', mod: 'horizontal'}, 21.5, 243.2, 280.58, 27.39);

export default group('frame', knob, verticalBeam, horizontalBeam);
 
