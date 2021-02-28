import {ChangeDetectionStrategy, Component, ElementRef, EventEmitter, HostListener, Input, Output} from '@angular/core';
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

  public selected = false;

  @HostListener('document:click', ['$event'])
  private onClick(event: MouseEvent): void {
    event.preventDefault();

    this.selected = (this.elementRef.nativeElement as HTMLElement).contains(event.target as HTMLElement);
  }

  constructor(private elementRef: ElementRef) {
  }

  public select(): void {
    this.selected = true;
  }

  public onContentChange(newContent: string): void {
    if (!this.element) {
      return;
    }

    this.element.changeContent(newContent);

    this.elementChange.emit();
  }
}
