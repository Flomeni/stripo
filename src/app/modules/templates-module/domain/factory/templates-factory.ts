import {Injectable} from '@angular/core';
import {Template} from '../aggregates/Template';
import {TemplateJSON} from '../../../../in-memory-data.service';

@Injectable()
export class TemplatesFactory {

  public makeAll(jsonArray: ReadonlyArray<TemplateJSON>): ReadonlyArray<Template> {
    return jsonArray.map((json: TemplateJSON) => this.makeOne(json));
  }

  private makeOne(json: TemplateJSON): Template {
    return new Template(json);
  }
}
