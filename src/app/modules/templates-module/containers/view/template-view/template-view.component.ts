import {Component} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Observable} from 'rxjs';
import {switchMap} from 'rxjs/operators';
import {TemplatesRepository} from '../../../domain/repository/templates-repository';
import {VIEW_ID_TOKEN} from '../../../index';
import {ViewTemplate} from '../../../domain/aggregates/Template';

@Component({
  templateUrl: './template-view.component.html'
})
export class TemplateViewComponent {

  public template$: Observable<ViewTemplate>;

  constructor({params}: ActivatedRoute,
              templatesRepository: TemplatesRepository) {
    this.template$ = params.pipe(
      switchMap((oParams: Params) => templatesRepository.getOneForView(oParams[VIEW_ID_TOKEN]))
    );
  }
}
