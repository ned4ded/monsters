import { MetaModel } from './meta.model';
import { NodeModel } from './node.model';
import { NodeBuilder } from './node-builder';

const make = (node: MetaModel | { name: string, mod?: string, tagType: string, class?: string, customAttr?: object,}) => {
  if(!(node instanceof MetaModel)) return make(new MetaModel(node));
  return new NodeModel(node, []);
}

const makeTag = (tagType) => (meta, attrs) => {
  const isObj = typeof(meta) === 'string' ? false : true;
  const name = isObj? meta.name : meta;
  const customAttr = isObj ? {...meta.customAttr} : {};
  const mod = isObj? meta.mod : null;
  const className = isObj? meta.class : null;

  return make({ name, tagType, customAttr: {...attrs, ...customAttr }, mod, class: className });
}

const makeCollection = {
  node: (n: { name: string, mod?: string, tagType: string, class?: string, customAttr?: object,}) => make(n),
  circle: (meta, cx, cy, r) => makeTag('circle')(meta, {cx, cy, r}),
  line: (meta, x1, y1, x2, y2) => makeTag('line')(meta, {x1, y1, x2, y2}),
  ellipse: (meta, cx, cy, rx, ry) => makeTag('ellipse')(meta, {cx, cy, rx, ry}),
  path: (meta, d, pathLength?) => makeTag('path')(meta, {d, pathLength: pathLength || null}),
  polygon: (meta, points) => makeTag('polygon')(meta, {points}),
  polyline: (meta, points) => makeTag('polyline')(meta, {points}),
  rect: (meta, x, y, width, height, rx?, ry?) => makeTag('rect')(meta, {x, y, width, height, rx: rx || null, ry: ry || null}),
};

const group = (meta: string | { name: string, mod?: string, class?: string; customAttr?: object; }, ...rest : NodeModel[]) : NodeModel => {
  const newObj = typeof(meta) === 'string' ? { name: meta } : meta;
  return make({ ...newObj, tagType: 'g'}).addParts(...rest);
}

const build = (node: NodeModel | MetaModel) : Element => {
  if(node instanceof MetaModel) return build(make(node));
  return new NodeBuilder(node).build();
}

export { makeCollection as make, group, build };
