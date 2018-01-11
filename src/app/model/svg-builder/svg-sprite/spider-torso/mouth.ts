import { make, group } from '../../svg-constructor.library';

const toothOne = make.polygon('tooth', '124.93 145.45 121.69 125.79 128.18 125.79 124.93 145.45');

const toothTwo = make.polygon('tooth', '138.93 145.45 135.69 125.79 142.18 125.79 138.93 145.45');

export default group('mouth', toothOne, toothTwo);
