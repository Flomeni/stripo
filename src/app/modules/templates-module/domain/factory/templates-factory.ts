import {Injectable} from '@angular/core';
import {TemplateJSON} from '../../../../in-memory-data.service';
import {ListTemplate, ViewTemplate} from '../aggregates/Template';

@Injectable()
export class TemplatesFactory {

  public makeOneForView(json: TemplateJSON): ViewTemplate {
    return new ViewTemplate(json);
  }

  public makeAllForList(jsonArray: ReadonlyArray<TemplateJSON>): ReadonlyArray<ListTemplate> {
    return jsonArray.map((json: TemplateJSON) => this.makeOneForList(json));
  }

  private makeOneForList(json: TemplateJSON): ListTemplate {
    return new ListTemplate(json);
  }
}
