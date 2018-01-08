import { make, group } from '../../svg-constructor.library';

const ribOne = make.rect('rib', 0, 227.64, 200.62, 21.55);
const ribTwo = make.rect('rib', 0, 264.11, 200.62, 21.55);
const ribThree = make.rect('rib', 0, 300.59, 200.62, 21.55);

export default group('body', ribOne, ribTwo, ribThree);
