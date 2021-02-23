import {Component} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Observable} from 'rxjs';
import {Template} from '../../../domain/aggregates/Template';
import {switchMap} from 'rxjs/operators';
import {TemplatesRepository} from '../../../domain/repository/templates-repository';
import {VIEW_ID_TOKEN} from '../../../index';

@Component({
  templateUrl: './templates-view.component.html'
})
export class TemplatesViewComponent {

  public template$: Observable<Template>;

  constructor({params}: ActivatedRoute,
              templatesRepository: TemplatesRepository) {
    this.template$ = params.pipe(
      switchMap((oParams: Params) => templatesRepository.getOne(oParams[VIEW_ID_TOKEN]))
    );
  }
}
