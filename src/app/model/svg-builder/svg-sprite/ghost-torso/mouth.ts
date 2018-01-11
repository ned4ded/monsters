import { make, group } from '../../svg-constructor.library';

const mouthFigure = make.ellipse('mouth-figure', 122.87, 152.77, 28.28, 61.84);

const ubula = make.path('ubula', 'M154,136.44a12,12,0,1,0-21.21,7.7l.21.29a10.68,10.68,0,0,1,1.52,5.86,12,12,0,0,1-24,0,11.48,11.48,0,0,1,2.06-6.56l.22-.29a12,12,0,1,0-21.76-7s-3.78-10.58-.42-13.94S107.7,89,107.7,89l28-3.89,12.42,32.5,8.39,9.07Z');

const toothOne = make.rect('tooth', 113.44, 88.72, 8.23, 16.72);

const toothTwo = make.rect('tooth', 124.06, 88.72, 8.23, 16.72);

const teeth = group('teeth', toothOne, toothTwo);

export default group('mouth', mouthFigure, ubula, teeth);
