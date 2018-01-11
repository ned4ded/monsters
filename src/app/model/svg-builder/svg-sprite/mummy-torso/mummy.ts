import { make, group } from '../../svg-constructor.library';

import head from './head';

const bodyPartOne = make.path('body-part', 'M216.21,255.72a163.68,163.68,0,0,0-83.74-23h0A164.49,164.49,0,0,0,17.82,279.36l48,20.83Z');

const bodyPartTwo = make.path('body-part', 'M-11.92,318.07H5.39l60.45-17.88-48-20.83A166.73,166.73,0,0,0-11.92,318.07Z');

const bodyPartThree = make.path({name: 'body-part', mod: 'dark'}, 'M-15.12,324.14l20.51-6.07H-11.92C-13,320.07-14.09,322.1-15.12,324.14Z');

const bodyPartFour = make.path({name: 'body-part', mod: 'dark'}, 'M216.21,255.72,65.84,300.19,5.39,318.07l-20.51,6.07a163.48,163.48,0,0,0-17.35,67.41c0,.05,0,.11,0,.17l309.16-73.95A167,167,0,0,0,216.21,255.72Z');

const bodyPartFive = make.path('body-part', 'M276.88,318.07l-.19-.31L-32.47,391.72c-.08,2-.16,4.05-.16,6.1v7.94l171.23,15.94L257,391.55l12.28-3.13,27.52-7A163.59,163.59,0,0,0,276.88,318.07Z');

const bandage = make.path({name: 'bandage', class: 'decor__bandage body__bandage'}, 'M364.14,242.55c-12.14,0-12.14,13.71-24.29,13.71s-12.14-13.71-24.29-13.71-12.14,13.71-24.27,13.71S279.17,242.55,267,242.55s-12.13,13.71-24.26,13.71-12.13-13.71-24.26-13.71-12.13,13.71-24.26,13.71S182.13,242.55,170,242.55V269.8c12.13,0,12.13,13.71,24.26,13.71s12.13-13.71,24.26-13.71,12.13,13.71,24.26,13.71S254.91,269.8,267,269.8s12.13,13.71,24.25,13.71,12.14-13.71,24.27-13.71,12.14,13.71,24.29,13.71S352,269.8,364.14,269.8Z');

const body = group('body', bandage, bodyPartOne, bodyPartTwo, bodyPartThree, bodyPartFour, bodyPartFive);

export default group('mummy', body, head);
