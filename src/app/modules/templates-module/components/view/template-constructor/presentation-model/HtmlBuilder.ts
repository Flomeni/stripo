abstract class DocumentBuilder<T> {
  public abstract setNodeName(name: string): T;

  public abstract setNodeContent(textContent: string): T;

  public abstract appendNode(stringifiedNode: string): T;

  public abstract toString(): string;

  public toNode(): HTMLElement | null {
    return null;
  }
}

export class HtmlBuilder extends DocumentBuilder<HtmlBuilder> {

  private nodeName: string | null;
  private childNodes: Array<string>;
  private textContent: string;
  private styles: string | null;
  private className: string | null;
  private attributes: Map<string, string>;

  constructor(nodeName?: string) {
    super();

    this.textContent = '';
    this.nodeName = nodeName || null;
    this.styles = null;
    this.className = null;
    this.childNodes = [];
    this.attributes = new Map();
  }

  public setNodeName(name: string): HtmlBuilder {
    this.nodeName = name.toLowerCase();
    return this;
  }

  public setNodeContent(textContent: string): HtmlBuilder {
    this.textContent = textContent;
    return this;
  }

  public appendNode(stringifiedNode: string): HtmlBuilder {
    this.childNodes.push(stringifiedNode);
    return this;
  }

  public setClassName(className: string): HtmlBuilder {
    this.className = className;
    return this;
  }

  public setStyles(styles: string): HtmlBuilder {
    this.styles = styles;
    return this;
  }

  public toString(): string {
    const children = this.childNodes.join('');
    const styles = `${this.styles ? ' styles="' + this.styles + '"' : ''}`;
    const className = `${this.className ? ' class="' + this.className + '"' : ''}`;
    const textContent = this.textContent || '';

    return `
        <${this.nodeName}${styles}${className}>
            ${textContent}${children}
        </${this.nodeName}>`;
  }
}
