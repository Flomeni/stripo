export enum ConstructorElementType {
  template = 'template',
  container = 'container',
  // tho atm we only have editable containers with text, so temporary assuming element with <editable> as a text container
  text_container = 'editable'
}

export class ElementType {

  constructor(readonly type: ConstructorElementType) {
  }

  public toString(): string {
    return `${this.type}`;
  }
}
