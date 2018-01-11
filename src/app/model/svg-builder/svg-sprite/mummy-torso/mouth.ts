import { make, group } from '../../svg-constructor.library';

const mouthFigure = make.path('mouth-figure', 'M193.13,182.24,64.24,156.85c.14.64.29,1.27.43,1.91l124.6,32.29Q191.32,186.79,193.13,182.24Z');

const tooth = make.polygon('tooth', '145.34 186.66 134.48 186.66 134.48 170.68 145.34 172.81 145.34 186.66');

export default group('mouth', mouthFigure, tooth);
