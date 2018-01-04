export class Node {
  protected name: string;
  protected mod: string;
  protected class: string;
  protected tagType: string;
  protected customAttr: object;

  constructor(meta : {
    name: string,
    mod?: string,
    tagType: string;
    class?: string;
    customAttr?: object;
  }) {
    this.name = meta.name;
    this.mod = meta.mod || null;
    this.tagType = meta.tagType;
    this.class = meta.class || null;
    this.customAttr = meta.customAttr || null;
  }

  getAttributes() {
    const modified = this.mod ? `${this.name}--${this.mod}` : null;
    const obj = {
      class: [this.name, modified, this.class].filter(n => n).join(' '),
    };
    const newObj = Object.assign(obj, this.customAttr);
    return newObj;
  }

  getName() {
    return this.name;
  }

  getType() {
    return this.tagType;
  }
}
