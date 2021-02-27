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

  private _element: HTMLElement;
  readonly constructorElement: ConstructorElement;

  constructor(private _template: ViewTemplate) {
    const element = parseHTMLFromString(_template.htmlString);
    this._element = element;
    this.constructorElement = this.domToConstructorElements(element);
  }

  get node(): HTMLElement {
    return this._element;
  }

  get template(): ViewTemplate {
    return this._template;
  }

  private domToConstructorElements(dom: HTMLElement): any {
    const children: ConstructorElement[] = [];
    for (let i = 0; i < dom.childElementCount; i++) {
      const element = dom.children[i] as HTMLElement;
      children.push(this.domToConstructorElements(element));
    }

    return new ConstructorElement(dom, children);
  }
}
