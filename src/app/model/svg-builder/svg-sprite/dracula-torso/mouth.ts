import { make, group } from '../../svg-constructor.library';

const toothLeft = make.polygon({ name: 'tooth', mod: 'left' }, '90.39 244.06 84.3 193.54 96.48 193.54 90.39 244.06');

const toothRight = make.polygon({ name: 'tooth', mod: 'right' }, '116.67 244.06 110.58 193.54 122.75 193.54 116.67 244.06');

const teeth = group('teeth', toothLeft, toothRight);

const mouthFigure = make.rect('mouth-figure', 82, 190.5, 42.86, 6.03);

const blood = make.path({name: 'blood', class: 'decor__blood'}, 'M120.05,267.44a2.51,2.51,0,1,1-5,.13c0-1.57.9-8.55,2.27-8.59S120,265.87,120.05,267.44Z');

export default group('mouth', teeth, mouthFigure, blood);
