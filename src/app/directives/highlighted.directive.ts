import {Directive, EventEmitter, HostBinding, HostListener, Input, Output} from '@angular/core';

@Directive({
  selector: '[highlighted]'
})
export class HighlightedDirective {

  @Input('highlighted')
  isHighlighted = false;

  @Output()
  toggleHighlight = new EventEmitter<any>;

  constructor() {
    console.log("Directive created...");
  }

  @HostBinding('class.highlighted')
  get cssClasses() {
    return this.isHighlighted;
    this.toggleHighlight.emit(this.isHighlighted);

  }

  @HostListener('mouseover')
  mouseOver() {
    this.isHighlighted = true;
  }

  @HostListener('mouseleave', ['$event'])
  mouseLeve($event) {
    this.isHighlighted = false;
    this.toggleHighlight.emit(this.isHighlighted);
  }

}
