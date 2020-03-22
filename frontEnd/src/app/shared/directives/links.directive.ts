import { Directive, ElementRef } from "@angular/core";

@Directive({
  selector: "a"
})
export class LinksDirective {
  constructor(el: ElementRef) {
    el.nativeElement.target = "_blank";
  }
}
