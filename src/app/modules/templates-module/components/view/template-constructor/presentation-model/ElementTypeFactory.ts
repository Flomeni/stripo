import {ConstructorElementType, ElementType} from './ElementType';

export class ElementTypeFactory {

  public getType(element: HTMLElement): ElementType {
    // We are not using node.className inside a static Factory because it forbids putting additional class selectors on nodes.
    if (element.classList.contains(ConstructorElementType.template)) {
      return new ElementType(ConstructorElementType.template);
    } else if (element.classList.contains(ConstructorElementType.container)) {
      return new ElementType(ConstructorElementType.container);
    } else if (element.classList.contains(ConstructorElementType.text_container)) {
      return new ElementType(ConstructorElementType.text_container);
    }

    throw new Error(`Unknown element type: {{ ${element.className} }} .`);
  }
}
