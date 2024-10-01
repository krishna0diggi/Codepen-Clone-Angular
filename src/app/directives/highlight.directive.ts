import { Directive, HostBinding, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {

  constructor(public el: ElementRef) { }

  @HostBinding(`style.backgroundColor`) 
  bgColor:string = 'magenta'

  @HostListener("mouseenter")
  changeFontSize(){
    console.log("Mouse Enter")
    this.el.nativeElement.style.fontSize = "50px"
  }

  @HostListener("mouseleave")
  resetFontSize(){
    console.log("Mouse leave")
    this.el.nativeElement.style.fontSize = "20px"
  }

}
