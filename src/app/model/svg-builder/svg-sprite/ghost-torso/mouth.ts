import { make, group } from '../../svg-constructor.library';

const mouthFigure = make.ellipse('mouth-figure', 122.87, 152.77, 28.28, 61.84);

const ubula = make.path('ubula', 'M148.48,125.93c-.46-.25-6-3.12-11.73-.12s-6.62,9.44-6.6,10.64a16.42,16.42,0,0,0,.53,3.55h0a12,12,0,0,0,2.26,4.15l.21.29a10.68,10.68,0,0,1,1.52,5.86,12,12,0,0,1-24,0,11.48,11.48,0,0,1,2.06-6.56l.22-.29a12,12,0,0,0,1.71-3.43h0a12.06,12.06,0,0,1,.54-3.57c.45-1.55-.73-8.54-5.58-10.64-4.17-1.8-10.2.39-13.23,5.9,3.69-21.4,12.94-40.07,26.25-40.76a26.29,26.29,0,0,1,2.71.13C140.48,93.34,147,119.22,148.48,125.93Z');

const toothOne = make.path('tooth', 'M121.8,105.44h-8.23L114,94.14a13.26,13.26,0,0,1,5.93-2.92A12.42,12.42,0,0,1,121.8,91Z');

const toothTwo = make.path('tooth', 'M132.42,105.44h-8.23L124.53,91a14.62,14.62,0,0,1,2.74.5,14.92,14.92,0,0,1,5.14,2.63q-.07,2.22-.09,4.53Q132.3,102.15,132.42,105.44Z');

const teeth = group('teeth', toothOne, toothTwo);

export default group('mouth', mouthFigure, ubula, teeth);
