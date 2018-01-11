import { make, group } from '../../svg-constructor.library';

const legTopOne = make.polyline({name: 'leg', mod: 'left'}, '16.65 99.33 51.1 64.87 85.55 99.33');
const legTopTwo = make.polyline({name: 'leg', mod: 'left'}, '16.65 119.89 51.1 85.44 85.55 119.89');
const legTopThree = make.polyline({name: 'leg', mod: 'left'}, '16.65 140.45 51.1 106 85.55 140.45');
const legTopFour = make.polyline({name: 'leg', mod: 'right'}, '179.35 99.33 213.81 64.87 248.26 99.33');
const legTopFive = make.polyline({name: 'leg', mod: 'right'}, '179.35 119.89 213.81 85.44 248.26 119.89');
const legTopSix = make.polyline({name: 'leg', mod: 'right'}, '179.35 140.45 213.81 106 248.26 140.45');

const legsTop = group({name: 'legs-pair', mod: 'top'}, legTopOne, legTopTwo, legTopThree, legTopFour, legTopFive, legTopSix);

const legBottomOne = make.polyline({name: 'leg', mod: 'left'}, '-28.89 218.03 19.11 170.03 67.11 218.03');
const legBottomTwo = make.polyline({name: 'leg', mod: 'left'}, '-28.89 246.68 19.11 198.68 67.11 246.68');
const legBottomThree = make.polyline({name: 'leg', mod: 'left'}, '-28.89 275.32 19.11 227.32 67.11 275.32');
const legBottomFour = make.polyline({name: 'leg', mod: 'right'}, '197.79 218.03 245.79 170.03 293.79 218.03');
const legBottomFive = make.polyline({name: 'leg', mod: 'right'}, '197.79 246.68 245.79 198.68 293.79 246.68');
const legBottomSix = make.polyline({name: 'leg', mod: 'right'}, '197.79 275.32 245.79 227.32 293.79 275.32');

const legsBottom = group({name: 'legs-pair', mod: 'bottom'}, legBottomOne, legBottomTwo, legBottomThree, legBottomFour, legBottomFive, legBottomSix);

export default group('legs', legsTop, legsBottom);
