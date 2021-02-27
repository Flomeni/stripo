import {TemplateJSON} from '../../../../in-memory-data.service';

export class ListTemplate {

  readonly id: number;
  readonly name: string;
  readonly modified: Date;

  constructor(private _cnt: TemplateJSON) {
    this.id = _cnt.id;
    this.name = _cnt.name;
    this.modified = new Date(_cnt.modified);
  }

  public toJSON(): TemplateJSON {
    return this._cnt;
  }
}

export class ViewTemplate extends ListTemplate {

  readonly htmlString: string;

  constructor(_cnt: TemplateJSON) {
    super(_cnt);
    this.htmlString = _cnt.template;
  }
}
