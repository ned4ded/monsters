import { make, group } from '../../svg-constructor.library';

import mouth from './mouth';
import nose from './nose';
import eyes from './eyes';

const hairPartOne = make.polygon('hair-part', '132.33 -0.05 96.08 48.13 87.64 48.13 79.21 48.13 132.33 -0.05');
const hairPartTwo = make.polygon('hair-part', '145.47 -0.05 109.21 48.13 100.78 48.13 92.34 48.13 145.47 -0.05');
const hairPartThree = make.polygon('hair-part', '158.6 -0.05 122.35 48.13 113.91 48.13 105.48 48.13 158.6 -0.05');
const hair = group('hair', hairPartOne, hairPartTwo, hairPartThree);

const face = make.rect('face', 18.13, 47.84, 168.14, 168.14, 52.98, 52.98);
const headFigure = group('head-figure', hair, face);

const steamPartRightOne = make.line('steam-part', 128.09, 159.01, 162.15, 124.95);
const steamPartRightTwo = make.line('steam-part', 130.88, 148.79, 138.31, 156.22);
const steamPartRightThree = make.line('steam-part', 136.14, 143.53, 143.57, 150.96);
const steamPartRightFour = make.line('steam-part', 141.4, 138.26, 148.84, 145.69);
const steamPartRightFive = make.line('steam-part', 146.67, 133, 154.1, 140.43);
const steamPartRightSix = make.line('steam-part', 151.93, 127.74, 159.36, 135.17);

const steamRight = group({name: 'steam', mod:'right'}, steamPartRightOne, steamPartRightTwo, steamPartRightThree, steamPartRightFour, steamPartRightFive, steamPartRightSix);

const steamPartLeftOne = make.line('steam-part', 40.51, 170.93, 74.57, 204.99);
const steamPartLeftTwo = make.line('steam-part', 50.73, 173.71, 43.3, 181.14);
const steamPartLeftThree = make.line('steam-part', 55.99, 178.98, 48.56, 186.41);
const steamPartLeftFour = make.line('steam-part', 61.26, 184.24, 53.84, 191.67);
const steamPartLeftFive = make.line('steam-part', 66.52, 189.5, 59.09, 196.94);
const steamPartLeftSix = make.line('steam-part', 71.79, 194.77, 64.35, 202.2);

const steamLeft = group({name: 'steam', mod:'left'}, steamPartLeftOne, steamPartLeftTwo, steamPartLeftThree, steamPartLeftFour, steamPartLeftFive, steamPartLeftSix);

const steams = group({name: 'steams', class: 'decor__steams'}, steamRight, steamLeft);


export default group('head', headFigure, eyes, nose, mouth, steams);
