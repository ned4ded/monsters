import { make, group } from '../../svg-constructor.library';

const tongue = make.rect('tongue', 24.31, 119.4, 226.72, 55.94, 27.93, 27.97);

const jaw = make.rect('jaw', 23.78, 175.24, 195.57, 20.31);

const cheek = make.rect('cheek', 23.78, 106.91, 125.28, 74.65);

const toothOne = make.polygon('tooth', '205.91 175.57 199.15 119.4 212.68 119.4 205.91 175.57');

const toothTwo = make.polygon('tooth', '184.59 175.57 177.82 119.4 191.35 119.4 184.59 175.57');

const toothThree = make.polygon('tooth', '163.26 175.57 156.49 119.4 170.03 119.4 163.26 175.57');

const teeth = group('teeth', toothOne, toothTwo, toothThree);

const salivaOne = make.path('saliva', 'M221.84,134.24a2.35,2.35,0,1,1-4.65.12c0-1.47.84-8,2.13-8S221.8,132.77,221.84,134.24Z');

const salivaTwo = make.path('saliva', 'M229.73,188.83a2.35,2.35,0,1,1-4.65.12c0-1.47.84-8,2.13-8S229.7,187.36,229.73,188.83Z');

const salivaThree = make.path('saliva', 'M197.77,178.05a2.35,2.35,0,1,1-4.65.12c0-1.47.84-8,2.13-8S197.73,176.58,197.77,178.05Z');

const salivaFour = make.path('saliva', 'M176.22,161.17a2.35,2.35,0,1,1-4.65.12c0-1.47.84-8,2.13-8S176.19,159.7,176.22,161.17Z');

const drooling = group({name: 'drooling', class: 'decor__drooling'}, salivaOne, salivaTwo, salivaThree, salivaFour);


export default group('mouth', tongue, jaw, cheek, teeth, drooling);
