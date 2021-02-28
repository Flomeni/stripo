import {ElementTypeFactory} from './ElementTypeFactory';
import {ElementType} from './ElementType';
import {HtmlBuilder} from './HtmlBuilder';
import {assertNoNull} from '../../../../utils/templates.utils';

const EDITABLE_CLASS_SELECTOR = 'editable';

function isEditable(element: HTMLElement): boolean {
  return element.classList.contains(EDITABLE_CLASS_SELECTOR);
}

export class ConstructorElement {

  readonly type: ElementType;

  readonly isEditable: boolean;

  private _isRemoved: boolean;

  // todo: Move html fields to an appropriately-designed Aggregate
  // Html settings
  readonly className: string;
  readonly nodeName: string;
  private _textContent: string | null;
  private _styles: string | null;

  constructor(element: HTMLElement,
              readonly children: Array<ConstructorElement>) {
    const typesFactory = new ElementTypeFactory();
    const type = typesFactory.getType(element);
    const editable = isEditable(element);

    this.type = type;
    this.isEditable = editable;
    this._isRemoved = false;

    this.className = element.className;
    this._textContent = editable ? element.innerHTML : null;
    this._styles = null;
    this.nodeName = element.nodeName;
  }

  get content(): string | null {
    return this._textContent;
  }

  public getAsHtmlString(childNode?: string): string {
    const {_textContent} = this;

    if (this.isEditable) {
      assertNoNull(_textContent, 'content');
    }

    const htmlBuilder = new HtmlBuilder()
      .setNodeName(this.nodeName)
      .setClassName(this.className)
      .setNodeContent(this._textContent!);

    if (this._styles) {
      htmlBuilder.setStyles(this._styles);
    }

    if (childNode) {
      htmlBuilder.appendNode(childNode);
    }

    return htmlBuilder.toString();
  }

  public changeContent(newContent: string): void {
    this._textContent = newContent;
  }

  public changeStyles(styles: string): void {
    this._styles = styles;
  }

  public remove(): void {
    this._isRemoved = true;
  }

  public restore(): void {
    this._isRemoved = false;
  }
}
