import { Directive , ElementRef, AfterViewInit  } from '@angular/core';

@Directive({
  selector: '[appTextLimit]'
})
export class TextLimitDirective implements AfterViewInit {

  constructor(private elementRef: ElementRef) { }

  ngAfterViewInit(): void {
    const element: HTMLElement = this.elementRef.nativeElement;
    const text = element.innerText;
    const limit = 120;

    if (text.length > limit) {
      const truncatedText = text.slice(0, limit) + '...';
      const moreLink = document.createElement('a');
      moreLink.href = '#';
      moreLink.innerText = 'Ver más';
      moreLink.addEventListener('click', (event) => {
        event.preventDefault();
        element.innerText = text;
        moreLink.remove();
      });
      
      element.innerText = truncatedText;
      element.appendChild(moreLink);
    }
  }

}
