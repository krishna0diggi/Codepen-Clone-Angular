import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {

  constructor() { }

  @HostBinding(`style.backgroundColor`) 
  bgColor:string = 'magenta'

}
