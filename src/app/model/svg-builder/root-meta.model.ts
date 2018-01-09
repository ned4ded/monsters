import { MetaModel } from './meta.model';

export class RootMetaModel extends MetaModel {
  private width: string;
  private height: string;
  private viewBox: string;
  private ratio: number;
  private anchor: number;

  constructor(meta : {
    name: string,
    mod?: string,
    tagType: string;
    class?: string;
    customAttr?: object;
    width: string;
    height?: string;
    viewBox: [number, number, number, number];
    initialScreenWidth: number;
    anchor: number;
  }) {
    super(meta);

    this.anchor = meta.anchor;
    this.width = meta.width.toString();
    this.height = meta.height.toString();
    this.viewBox = meta.viewBox.join(' ');
    this.ratio = meta.viewBox[3] / meta.initialScreenWidth;
  }

  getAttributes() {
    const modified = this.mod ? `${this.name}--${this.mod}` : null;
    const obj = {
      class: [this.name, modified, this.class].filter(n => n).join(' '),
      viewBox: this.viewBox,
      width: this.width,
      height: this.height,
    };
    const newObj = Object.assign(obj, this.customAttr);
    return newObj;
  }

  getAnchor() {
    return 'anchor-' + this.anchor;
  }
}
