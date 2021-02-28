import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {ConstructorElement} from '../presentation-model/ConstructorElement';

@Component({
  selector: 'constructor-element',
  templateUrl: './constructor-element.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['constructor-element.component.less']
})
export class ConstructorElementComponent {

  @Input()
  element: ConstructorElement | null = null;

  @Output()
  elementChange = new EventEmitter<void>();

  constructor() {
  }

  public onContentChange(newContent: string): void {
    if (!this.element) {
      return;
    }

    this.element.changeContent(newContent);

    this.elementChange.emit();
  }
}
