import {Directive, HostBinding, Input} from '@angular/core';

@Directive({
  selector: '[highlighted]'
})
export class HighlightedDirective {

  @Input('highlighted')
  isHighlighted = false;

  constructor() {
    console.log("Directive created...");
  }

  @HostBinding('class.highlighted')
  get cssClasses() {
    return this.isHighlighted;
  }

}
