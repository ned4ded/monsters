import { Node } from './node.model';

export class RootNode extends Node {
  private width: string;
  private height: string;
  private viewBox: string;
  private ratio: number;


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
  }) {
    super(meta);

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
}
