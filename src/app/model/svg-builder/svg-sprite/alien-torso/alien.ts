// Entities
import { make, group } from '../../svg-constructor.library';

// Model Parts
import head from './head';

const body = make.ellipse({name: 'body', mod: 'figure'}, 82.66, 285.78, 50.36, 139.24);

export default group('alien', head, body);
