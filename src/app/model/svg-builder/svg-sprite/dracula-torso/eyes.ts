import { make, group } from '../../svg-constructor.library';

const eyeLeft = make.circle({name: 'eye', mod: 'left'}, 88.29, 108.56, 6.46);
const eyeRight = make.circle({name: 'eye', mod: 'right'}, 118.01, 108.56, 6.46);
const eyebrows = make.rect('eyebrows', 81.9, 89.55, 42.86, 6.03);

export default group('eyes', eyeLeft, eyeRight, eyebrows);
