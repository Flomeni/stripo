import {Component} from '@angular/core';
import {TemplatesRepository} from '../../../domain/repository/templates-repository';
import {Observable} from 'rxjs';
import {ListTemplate} from '../../../domain/aggregates/Template';

@Component({
  templateUrl: './templates-list.component.html',
  styleUrls: ['./templates-list.component.less']
})
export class TemplatesListComponent {

  public templates$: Observable<ReadonlyArray<ListTemplate>>;

  constructor(templatesRepository: TemplatesRepository) {
    this.templates$ = templatesRepository.getAllForList();
  }
}
