import { make, group } from '../../svg-constructor.library';

import eyes from './eyes';
import frame from './frame';

const pillow = make.path('pillow', 'M32.28,36.89A153.29,153.29,0,0,0,185.65,190.26,153.29,153.29,0,0,0,32.28,36.89Z');

const mattress = make.rect('mattress', 21.5, 188.5, 566.4, 54.8);

const blanket = make.rect('blanket', 202.5, 175, 379.41, 120.96);

export default group('bed', pillow, mattress, frame, blanket, eyes);
