import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {ViewTemplate} from '../../../domain/aggregates/Template';
import {TemplatePM} from './presentation-model/TemplatePM';

@Component({
  selector: 'template-constructor',
  templateUrl: './template-constructor.component.html',
  styleUrls: ['./template-constructor.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TemplateConstructorComponent {

  @Input()
  set template(template: ViewTemplate) {
    this.templatePM = new TemplatePM(template);
  }

  @Output()
  templateChange = new EventEmitter<ViewTemplate>();

  public templatePM: TemplatePM | null = null;

  constructor() {
  }

  public onElementChange(): void {
    if (!this.templatePM) {
      return;
    }
    console.log(this.templatePM.toHtmlString());
    console.log(this.templatePM.template.htmlString);
  }
}
