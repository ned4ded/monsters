import { make } from '../../svg-constructor.library';

const clipPath = make.node({ name: 'clipPath', tagType: 'clipPath', customAttr: {id: 'mouth-clip-path'}});

const mouthClipPath = make.ellipse('mouth-clip-path-figure', 122.87, 152.77, 28.28, 61.84);

const clipPathGroup = clipPath.addPart(mouthClipPath);

const defs = make.node({ name: 'defs', tagType: 'defs'});

export default defs.addPart(clipPathGroup);
