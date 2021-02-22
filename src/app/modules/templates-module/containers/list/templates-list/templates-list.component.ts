import {Component} from '@angular/core';
import {TemplatesRepository} from '../../../domain/repository/templates-repository';
import {Observable} from 'rxjs';
import {Template} from '../../../domain/aggregates/Template';

@Component({
  templateUrl: './templates-list.component.html'
})
export class TemplatesListComponent {

  public templates$: Observable<ReadonlyArray<Template>>;

  constructor(templatesRepository: TemplatesRepository) {
    this.templates$ = templatesRepository.getAllTemplates();
  }
}
