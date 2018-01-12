import { make, group } from '../../svg-constructor.library';

const eyeballPartTop = make.path({name: 'eyeball-part', mod: 'top'}, 'M95,82.9a22.69,22.69,0,0,0,32.1,0');

const eyeballPartBottom = make.path({name: 'eyeball-part', mod: 'bottom'}, 'M127.11,82.9a22.69,22.69,0,0,0-32.1,0');

const eyeball = group('eyeball', eyeballPartTop, eyeballPartBottom);

const pupilPartTop = make.path({name: 'pupil-part', mod: 'top'}, 'M111.06,76.25a9.41,9.41,0,0,0,0,13.31');

const pupilPartBottom = make.path({name: 'pupil-part', mod: 'bottom'}, 'M111.06,89.56a9.41,9.41,0,0,0,0-13.31');

const pupil = group('pupil', pupilPartTop, pupilPartBottom);

export default group({name: 'eye', mod: 'right'}, eyeball, pupil);
