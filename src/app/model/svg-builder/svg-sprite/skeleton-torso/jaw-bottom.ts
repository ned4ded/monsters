import { make, group } from '../../svg-constructor.library';

const toothOne = make.rect('tooth', 53.24, 178.43, 10.75, 10.75);
const toothTwo = make.rect('tooth', 69.77, 178.43, 10.75, 10.75);
const toothThree = make.rect('tooth', 86.3, 178.43, 10.75, 10.75);
const toothFour = make.rect('tooth', 102.83, 178.43, 10.75, 10.75);
const toothFive = make.rect('tooth', 119.37, 178.43, 10.75, 10.75);
const toothSix = make.rect('tooth', 135.9, 178.43, 10.75, 10.75);

const teeth = group('teeth', toothOne, toothTwo, toothThree, toothFour, toothFive, toothSix);

const jaw = make.rect('jaw', 43.33, 169.54, 113.24, 28.52);

export default group({name: 'jaw', mod: 'bottom'}, jaw, teeth);
