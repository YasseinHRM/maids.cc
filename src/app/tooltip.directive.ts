import { Directive, ElementRef, Renderer2, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appTooltip]',
  standalone: true,
})
export class TooltipDirective {
  @Input() tooltipText: string = '';
  private tooltipElement: HTMLElement;

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.tooltipElement = this.renderer.createElement('span');
    this.renderer.setStyle(this.tooltipElement, 'position', 'absolute');
    this.renderer.setStyle(this.tooltipElement, 'background', '#007BFF');
    this.renderer.setStyle(this.tooltipElement, 'color', '#fff');
    this.renderer.setStyle(this.tooltipElement, 'padding', '5px 10px');
    this.renderer.setStyle(this.tooltipElement, 'border-radius', '5px');
    this.renderer.setStyle(this.tooltipElement, 'font-size', '12px');
    this.renderer.setStyle(this.tooltipElement, 'white-space', 'nowrap');
    this.renderer.setStyle(this.tooltipElement, 'z-index', '1000');
    this.renderer.setStyle(this.tooltipElement, 'display', 'none'); 
    this.renderer.appendChild(this.el.nativeElement, this.tooltipElement); 
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.tooltipElement.innerText = this.tooltipText;
    this.renderer.setStyle(this.tooltipElement, 'display', 'block');
  }

  @HostListener('mousemove', ['$event']) onMouseMove(event: MouseEvent) {
    const tooltipWidth = this.tooltipElement.offsetWidth;
    const tooltipHeight = this.tooltipElement.offsetHeight;
    const pageWidth = window.innerWidth;
    const pageHeight = window.innerHeight;

    let left = event.clientX + 10;
    let top = event.clientY + 10;

    if (left + tooltipWidth > pageWidth) {
      left = event.clientX - tooltipWidth - 10;
    }

    if (top + tooltipHeight > pageHeight) {
      top = event.clientY - tooltipHeight - 10;
    }

    this.renderer.setStyle(this.tooltipElement, 'top', `${top}px`);
    this.renderer.setStyle(this.tooltipElement, 'left', `${left}px`);
  }
   

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.setStyle(this.tooltipElement, 'display', 'none');
  }
}
