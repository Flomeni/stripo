import {ViewTemplate} from '../../../../domain/aggregates/Template';
import {ConstructorElement} from './ConstructorElement';

function parseHTMLFromString(htmlString: string): HTMLDivElement {
  /*const template = document.createElement('template');
  template.innerHTML = htmlString;
  return template.content.cloneNode(true);*/
  const parser = new DOMParser();
  const document = parser.parseFromString(htmlString, 'text/html');
  return document.body.firstElementChild as HTMLDivElement;
}

export class TemplatePM {

  readonly constructorElement: ConstructorElement;

  constructor(private _template: ViewTemplate) {
    const element = parseHTMLFromString(_template.htmlString);
    this.constructorElement = this.domToConstructorElements(element);
  }

  get template(): ViewTemplate {
    return this._template;
  }

  public toHtmlString(): string {
    const getHtmlString = (el: ConstructorElement) => {
      const children: string[] = [];
      for (const child of el.children) {
        children.push(getHtmlString(child));
      }

      const childrenString = children.join('');
      return el.getAsHtmlString(childrenString);
    };

    return getHtmlString(this.constructorElement);
  }

  private domToConstructorElements(dom: HTMLElement): ConstructorElement {
    const children: ConstructorElement[] = [];
    for (const child of Array.from(dom.children)) {
      children.push(this.domToConstructorElements(child as HTMLElement));
    }

    return new ConstructorElement(dom, children);
  }
}
