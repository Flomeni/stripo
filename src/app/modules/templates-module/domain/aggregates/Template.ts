import {TemplateJSON} from '../../../../in-memory-data.service';

export class Template {

  readonly id: number;
  readonly name: string;
  readonly template: string;
  readonly modified: Date;

  constructor(private _cnt: TemplateJSON) {
    this.id = _cnt.id;
    this.name = _cnt.name;
    this.template = _cnt.template;
    this.modified = new Date(_cnt.modified);
  }

  public toJSON(): TemplateJSON {
    return this._cnt;
  }
}
