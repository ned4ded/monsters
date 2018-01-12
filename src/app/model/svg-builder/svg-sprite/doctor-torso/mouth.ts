import { make, group } from '../../svg-constructor.library';

const mouthFigure = make.rect('mouth-figure', 52.67, 225.05, 45.5, 7.34);

const toothLeft = make.rect('tooth', 61.64, 231.9, 10.92, 15.17);

const toothRight = make.rect('tooth', 78.28, 231.9, 10.92, 15.17);


export default group('mouth', mouthFigure, toothLeft, toothRight);
