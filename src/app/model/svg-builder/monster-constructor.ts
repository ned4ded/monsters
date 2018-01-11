import { SvgBuilder } from './svg-builder.service';
import { RootMetaModel } from './root-meta.model';

export default ({name, viewBox, initialScreenWidth, figure, anchor, width, height} : {
  name: string,
  viewBox: [number, number, number, number],
  initialScreenWidth: number,
  figure: any,
  anchor: number,
  width?: string,
  height?: string
}) => {

  const node = new RootMetaModel({
    name: name,
    tagType: 'svg',
    customAttr: {
      'xmlns': 'http://www.w3.org/2000/svg',
      'xmlns:xlink': 'http://www.w3.org/1999/xlink',
    },
    class: 'svg-container',
    width: width? width : '80%',
    height: height? height: '80%',
    viewBox: viewBox,
    initialScreenWidth: initialScreenWidth,
    anchor: anchor,
  });

  return new SvgBuilder({ meta: node, figure: figure});
};
