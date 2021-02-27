import {ElementTypeFactory} from './ElementTypeFactory';
import {ElementType} from './ElementType';

const EDITABLE_CLASS_SELECTOR = 'editable';

function isEditable(element: HTMLElement): boolean {
  return element.classList.contains(EDITABLE_CLASS_SELECTOR);
}

export class ConstructorElement {

  readonly type: ElementType;
  private _content: string | null;
  readonly className: string;
  readonly isEditable: boolean;
  private _isRemoved: boolean;

  constructor(readonly element: HTMLElement,
              readonly children: Array<ConstructorElement>) {
    const typesFactory = new ElementTypeFactory();
    const type = typesFactory.getType(element);
    const editable = isEditable(element);

    this.type = type;
    this._content = editable ? element.innerHTML : null;
    this.isEditable = editable;
    this.className = element.className;
    this._isRemoved = false;
  }

  get content(): string | null {
    return this._content;
  }

  public changeContent(newContent: string): void {
    this._content = newContent;
  }
}
