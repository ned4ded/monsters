import { SvgBuilder } from './svg-builder.service';
import { RootMetaModel } from './root-meta.model';

export default ({name, viewBox, initialScreenWidth, figure}) => {

  const node = new RootMetaModel({
    name: name,
    tagType: 'svg',
    customAttr: {
      'xmlns': 'http://www.w3.org/2000/svg',
      'xmlns:xlink': 'http://www.w3.org/1999/xlink',
    },
    class: 'svg-container',
    width: '80%',
    height: '80%',
    viewBox: viewBox,
    initialScreenWidth: initialScreenWidth,
  });

  return new SvgBuilder({ meta: node, figure: figure});
};
