import {Injectable} from '@angular/core';
import {ListTemplate, ViewTemplate} from '../aggregates/Template';
import {API, InMemoryDataService, TemplateJSON} from '../../../../in-memory-data.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {TemplatesFactory} from '../factory/templates-factory';

@Injectable()
export class TemplatesRepository {

  private readonly TEMPLATES_URL = `${InMemoryDataService.BASE_URL}/${API.templates}`;

  constructor(private http: HttpClient,
              private templatesFactory: TemplatesFactory) {
  }

  public getAllForList(): Observable<ReadonlyArray<ListTemplate>> {
    return this.get<ReadonlyArray<TemplateJSON>>(this.TEMPLATES_URL).pipe(
      map((jsonArray: ReadonlyArray<TemplateJSON>) => this.templatesFactory.makeAllForList(jsonArray))
    );
  }

  public getOneForView(id: string): Observable<ViewTemplate> {
    return this.get<TemplateJSON>(`${this.TEMPLATES_URL}/${id}`).pipe(
      map((json: TemplateJSON) => this.templatesFactory.makeOneForView(json))
    );
  }

  // todo: move to API service
  private get<T>(url: string): Observable<T> {
    return this.http.get<T>(url, {responseType: 'json'});
  }
}
