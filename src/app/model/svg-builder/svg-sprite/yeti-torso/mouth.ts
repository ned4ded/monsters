import { make, group } from '../../svg-constructor.library';

const jaw = make.rect('jaw', 75.52, 117.65, 116.41, 64.46);

const mouthFigure = make.rect('mouth-figure', 82.73, 132.72, 101.97, 43.29);

const lips = make.path('lips', 'M182.79,134.64v39.44H84.66V134.64h98.13m3.85-3.85H80.81v47.14H186.64V130.79Z');

const toothTopOne = make.polygon('tooth', '161.13 160.77 155.1 134.64 167.16 134.64 161.13 160.77');

const toothTopTwo = make.polygon('tooth', '142.13 160.77 136.1 134.64 148.16 134.64 142.13 160.77');

const toothTopThree = make.polygon('tooth', '123.13 160.77 117.1 134.64 129.16 134.64 123.13 160.77');

const toothTopFour = make.polygon('tooth', '104.13 160.77 98.1 134.64 110.16 134.64 104.13 160.77');

const teethTop = group('teeth-top', toothTopOne, toothTopTwo, toothTopThree, toothTopFour);

const toothBottomOne = make.polygon('tooth', '94.75 147.96 100.78 174.09 88.72 174.09 94.75 147.96');

const toothBottomTwo = make.polygon('tooth', '113.75 147.96 119.78 174.09 107.72 174.09 113.75 147.96');

const toothBottomThree = make.polygon('tooth', '132.75 147.96 138.78 174.09 126.72 174.09 132.75 147.96');

const toothBottomFour = make.polygon('tooth', '151.75 147.96 157.78 174.09 145.72 174.09 151.75 147.96');

const toothBottomFive = make.polygon('tooth', '170.75 147.96 176.78 174.09 164.72 174.09 170.75 147.96');

const teethBottom = group('teeth-bottom', toothBottomOne, toothBottomTwo, toothBottomThree, toothBottomFour, toothBottomFive);

const teeth = group('tooth', teethTop, teethBottom);

export default group('mouth', jaw, mouthFigure, lips, teeth);
