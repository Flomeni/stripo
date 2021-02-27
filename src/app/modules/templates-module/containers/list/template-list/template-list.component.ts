import {Component} from '@angular/core';
import {TemplatesRepository} from '../../../domain/repository/templates-repository';
import {Observable} from 'rxjs';
import {ListTemplate} from '../../../domain/aggregates/Template';

@Component({
  templateUrl: './template-list.component.html',
  styleUrls: ['./template-list.component.less']
})
export class TemplateListComponent {

  public templates$: Observable<ReadonlyArray<ListTemplate>>;

  constructor(templatesRepository: TemplatesRepository) {
    this.templates$ = templatesRepository.getAllForList();
  }
}
