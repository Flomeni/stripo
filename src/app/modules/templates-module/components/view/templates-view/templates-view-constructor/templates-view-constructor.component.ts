import {Component, Input} from '@angular/core';
import {Template} from '../../../../domain/aggregates/Template';

@Component({
  selector: 'templates-view-constructor',
  templateUrl: './templates-view-constructor.component.html',
  styleUrls: ['./templates-view-constructor.component.less']
})
export class TemplatesViewConstructorComponent {

  @Input()
  template: Template | null = null;
}
